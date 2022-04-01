document.body.style.fontFamily = " 'Courier New', Courier, monospace"
const title = document.querySelector('.title')
title.style.textAlign = 'center'
const foodCategory = document.querySelectorAll('.category')
foodCategory.forEach(e => {
    e.style.color = 'yellow'
    e.style.fontStyle = 'italic'
    e.style.fontSize = '1.5rem'
    e.style.textDecoration = 'underline' 
    
})
const warning = document.getElementById('warning')
warning.style.fontSize = '2rem'
warning.style.fontFamily = "'Times New Roman', Times, serif"
warning.style.textAlign = 'center'

const allergies = document.querySelectorAll('.allergies li:nth-child(even)')

allergies.forEach(e => {
    e.style.backgroundColor = 'pink'
})

const foodSect = document.querySelectorAll('.food-desc')
foodSect.forEach(e=>{
    e.style.border = '2px solid yellow'
    e.style.width = '100px'
    e.style.height = '100px'
    e.style.borderRadius = '100%'
    e.style.display = 'flex'
    e.style.justifyContent = 'center'
    e.style.alignItems = 'center'
})

const footer = document.querySelector('.footer')
footer.style.display = 'flex'
footer.style.justifyContent = 'space-evenly'

const food1 = document.querySelectorAll('.food-category')[0]
food1.style.backgroundColor = 'aquamarine'
food1.style.padding = '20px'
food1.style.width = '25%'
food1.style.height = '25%'

const food2 = document.querySelectorAll('.food-category')[1]
food2.style.backgroundColor = 'coral'
food2.style.padding = '20px'
food2.style.width = '25%'
food2.style.height = '25%'

const food3 = document.querySelectorAll('.food-category')[2]
food3.style.backgroundColor = 'crimson'
food3.style.padding = '20px'
food3.style.width = '25%'
food3.style.height = '25%'

const main = document.querySelector('.main')
function myFunction(x) {
    if (x.matches) { // If media query matches
      main.style.display = "flex";
      main.style.justifyContent = 'space-around'
    } else {
      main.style.display = "block";
    }
  }
  
  let x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 







