import { movies } from './data.js'

const movieElems = document.querySelectorAll(".card-header");
const ulElems = document.querySelectorAll('ul')
const headerElem = document.getElementById('header')
const imgElem = document.getElementById('img')



hideAllListElem()


/*  movieElems.forEach((movieElem) => {
    movieElem.addEventListener("click", () => {
        hideAllListElem()
        movieElem.nextElementSibling.style.display = 'block'
    });
   
}); 
 */


movies.forEach((movie,index) => {
    imgElem.innerHTML += `
    <div class="card card${index+1}" style="width: 20rem;">
<img src="${movie.src}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${movie.title}</h5>
  <p class="card-text">${movie.text}</p>
</div>

</div>`
})

function hideAllListElem() {
    ulElems.forEach(ulElem => {
        ulElem.style.display = 'none'
    })
}

const cardElems = document.querySelectorAll('.card')

function hideAllImgElem(){
    cardElems.forEach(cardElem => {
        cardElem.style.display = 'none'
    })
}

headerElem.addEventListener('click', function() {
    hideAllListElem()
})



//-------------------------------------------------------------------------


hideAllImgElem() 

//cards handle
const card1Elem = document.querySelector('.card1')
const card2Elem = document.querySelector('.card2')
const card3Elem = document.querySelector('.card3')
const card4Elem = document.querySelector('.card4')
const card5Elem = document.querySelector('.card5')

//buttons handle
const btn1 = document.querySelector('#movie1')
const btn2 = document.querySelector('#movie2')
const btn3 = document.querySelector('#movie3')
const btn4 = document.querySelector('#movie4')
const btn5 = document.querySelector('#movie5')


//btn click events
btn1.addEventListener('click', () => {
    hideAllImgElem()
    card1Elem.style.display = 'block'
})
btn2.addEventListener('click', () => {
    hideAllImgElem()
    card2Elem.style.display = 'block'
})
btn3.addEventListener('click', () => {
    hideAllImgElem()
    card3Elem.style.display = 'block'
})
btn4.addEventListener('click', () => {
    hideAllImgElem()
    card4Elem.style.display = 'block'
})
btn5.addEventListener('click', () => {
    hideAllImgElem()
    card5Elem.style.display = 'block'
})
