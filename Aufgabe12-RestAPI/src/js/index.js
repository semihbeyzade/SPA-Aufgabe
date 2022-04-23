import {legendsData} from "./legends.js";
let jsonToObject = JSON.parse(legendsData)
console.log(jsonToObject);

const femaleElems = document.querySelectorAll('.card-group')[0]
const maleElems = document.querySelectorAll('.card-group')[1]


const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' ' + 'Mrd' + ' ' + 'USD';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' ' + 'Mio' + ' ' + 'USD';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' ' + 'K' + ' ' + 'USD';
    }
    return num;
}



const female = jsonToObject.filter(element => {
    if(element.pers.gender === 'female') return element
})
console.log(female);



female.map((e)=>{
    
    let honors = ""

    if(e.career.honors && e.career.honors.length > 0){
      honors = e.career.honors.reduce((prev, curr) => {
        return  prev+`<span>${curr.count}x ${curr.title}</span>`
      },"")
    }

    

    
    femaleElems.innerHTML +=
     `
     <div class="card border-0 m-4">
     <img src="${e.img }" class="card-img-top" alt="...">
     <div class="card-body bg-dark">
       <h5 class="card-title text-white">${e.pers.name}</h5>
       <small class="text-muted">${getAge(e.pers.birthDate)} Jahre alt, ${e.pers.height } cm</small>
       <div class="d-flex justify-content-between">
       <p class ="text-danger">Sport:<p/>
       <p class="text-uppercase text-danger">${e.career.sport}<p/>
       </div>
       <div class="d-flex justify-content-between">
       <p class ="text-white">Vermögen:<p/>
       <p class="text-white"> ${nFormatter(e.career.netWorth)}<p/>
       </div>
       <p class="card-text text-white">Nennenswertes:</p>
       <p class="text-white">${honors}</p>
       <button type="button" class="btn btn-outline-danger">Mehr über ${e.pers.name}</button>
     </div>
     
     </div>
  
  `
})


const male = jsonToObject.filter(element => {
    if(element.pers.gender === 'male') return element
})
console.log(female);
male.map((e)=>{

    let honors = ""

    if(e.career.honors && e.career.honors.length > 0){
      honors = e.career.honors.reduce((prev, curr) => {
        return  prev+`<span>${curr.count}x ${curr.title}</span>`
      },"")
    }

    maleElems.innerHTML +=
     `
     <div class="card border-0 m-4">
     <img src="${e.img }" class="card-img-top" alt="...">
     <div class="card-body bg-dark">
       <h5 class="card-title text-white">${e.pers.name}</h5>
       <small class="text-muted">${getAge(e.pers.birthDate)} Jahre alt, ${e.pers.height } cm</small>
       <div class="d-flex justify-content-between">
       <p class ="text-danger">Sport:<p/>
       <p class="text-uppercase text-danger">${e.career.sport}<p/>
       </div>
       <div class="d-flex justify-content-between">
       <p class ="text-white">Vermögen:<p/>
       <p class="text-white">${nFormatter(e.career.netWorth)}<p/>
       </div>
       <p class="card-text text-white">Nennenswertes:</p>
       <p class="text-white">${honors}</p>
       <button type="button" class="btn btn-outline-danger">Mehr über ${e.pers.name}</button>
     </div>
     
     </div>
  
  `
})






