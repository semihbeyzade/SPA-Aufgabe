const textElem = document.getElementById('text')
const btnElem = document.getElementById('jsstyle')

btnElem.addEventListener('click', () => {
    textElem.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'
    textElem.style.fontSize = '4rem'
    textElem.style.color = 'yellow'
   
})