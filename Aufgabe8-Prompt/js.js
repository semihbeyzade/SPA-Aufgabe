let vorName = prompt('Was ist dein Vorname?')
const nameElem = document.getElementById("name")
let a = nameElem.innerText = `Hallo ${vorName}`
nameElem.style.color = "yellow"
nameElem.style.backgroundColor = "pink"
let alter = prompt('Wie alt bist du?')
nameElem.innerText = `${vorName} ist ${alter} Jahre alt`

