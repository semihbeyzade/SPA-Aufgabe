const elemName = document.querySelector(".name")
const elemStreet = document.querySelector(".street")
const elemHausNo = document.querySelector(".hausno")
const elemBtn = document.querySelector(".addBtn")
const elemMessage = document.getElementById("message")
const elemDelete = document.querySelector(".delete")

elemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameValue = elemName.value
    const streetValue = elemStreet.value
    const hausValue = elemHausNo.value
    localStorage.setItem("name", nameValue)
    localStorage.setItem("street", streetValue)
    localStorage.setItem("haus", hausValue)

    window.location.reload()
})

const getName = localStorage.getItem("name")

    if(localStorage.getItem("name") === null){
        elemMessage.innerText = `Wilkommen zurück!`
    }else{
        elemMessage.innerText = `Wilkommen zurück ${getName} 😼`
    }

elemDelete.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload()
})