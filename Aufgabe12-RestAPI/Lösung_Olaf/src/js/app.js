import { legendsData } from "/js/legends.js";


function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

let parsedData = JSON.parse(legendsData)

let items = parsedData.map(i => {

  let honors = ""

  if(i.career.honors && i.career.honors.length > 0){
    honors = i.career.honors.reduce((prev, curr) => {
      return  prev+`<span>${curr.count}x ${curr.title}</span>`
    },"")
  }

  let element =
    ` <div class="card"> 
      <div class="img">
        <img src="${i.img}">
      </div>
      <div class="content">
        <div class="content-main">
          <span class="name">${i.pers.firstName} ${i.pers.name}</span>
          <span class="meta">${_calculateAge(new Date(i.pers.birthDate))} Jahre alt, ${i.pers.height}cm</span>
          <div class="sport">
            <span>Sport:</span>
            <span>${i.career.sport}</span>
          </div>
          <div class="net">
            <span>Vermögen:</span>
            <span>${parseInt(i.career.netWorth)/1000000} Mio USD</span>
          </div>
          <div class="honors">
            ${honors}
          </div>
        </div>
        <div>
          <a class="link btn" href="${i.link}" target="_blank">mehr zu ${i.pers.firstName} ${i.pers.name}</a>
        </div>
      </div>

    </div>`
  i.element = element
  i.pers.age = _calculateAge(new Date(i.pers.birthDate))
  return i
})



const sectionMale = document.querySelector("#male .cards")
const sectionFemale = document.querySelector("#female .cards")

const reloadItems = (splitGender = true,sortBy = "name", items) => {


  switch (sortBy){
    case "name":
      items.sort((a,b)=>{
        return a.pers.name.localeCompare(b.pers.name)
      })
      break
    case "net":
      items.sort((a,b)=>{
        if(parseInt(a.career.netWorth) > parseInt(b.career.netWorth)) return -1
        else if(parseInt(a.career.netWorth) < parseInt(b.career.netWorth)) return 1
        else return 0
      })
      break
    case "age":
      items.sort((a,b)=>{
        if(parseInt(a.pers.age) > parseInt(b.pers.age)) return 1
        else if(parseInt(a.pers.age) < parseInt(b.pers.age)) return -1
        else return 0
      })
      break
  }

  if(splitGender){
    document.querySelectorAll("h2").forEach(el=>{
      el.style.display = "block"
    })
    document.getElementById("mwtoggle").innerText = "♂ und ♀ zusammen anzeigen"
    items.forEach(i => {
      if(i.pers.gender == "male"){
        sectionMale.insertAdjacentHTML("beforeend",i.element)
      }else if(i.pers.gender == "female"){
        sectionFemale.insertAdjacentHTML("beforeend",i.element)
      }
    })
  } else{
    document.querySelectorAll("h2").forEach(el=>{
      el.style.display = "none"
    })
    document.getElementById("mwtoggle").innerText = "♂ und ♀ getrennt anzeigen"
    items.forEach(i => {
      sectionFemale.insertAdjacentHTML("beforeend",i.element)
    })
  }
  setTimeout(()=> {
      document.querySelectorAll(".cards .card").forEach(card => {
        card.classList.add("visible")
      })
    }
  ,50)





}

reloadItems(true, "name", items)


const mwtoggleBtn = document.getElementById("mwtoggle")
const sortByButtons = document.querySelectorAll("#sort-by-buttons .btn")

let splitgender = true
let sortBy = "name"

mwtoggle.onclick = () => {
  document.querySelectorAll(".cards .card").forEach(card=>{
    card.classList.remove("visible")
  })

  setTimeout(()=>{
    sectionMale.innerHTML = ""
    sectionFemale.innerHTML = ""
    reloadItems(!splitgender, sortBy, items)
    splitgender = !splitgender
  },1000)
}

sortByButtons.forEach((el)=>{
  el.onclick = () => {
    document.querySelectorAll(".cards .card").forEach(card=>{
      card.classList.remove("visible")
    })
    sortByButtons.forEach(el=>el.classList.remove("active"))
    sortBy = el.getAttribute("data-sortby")
    el.classList.add("active")
    setTimeout(()=>{
      sectionMale.innerHTML = ""
      sectionFemale.innerHTML = ""
      reloadItems(splitgender, sortBy, items)
    },1000)
  }
})

