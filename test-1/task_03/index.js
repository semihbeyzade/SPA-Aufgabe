const paragElems = document.querySelectorAll('.parags')
const btnElem3 = document.querySelector('#changeBg')

btnElem3.addEventListener('click', () => {
    paragElems.forEach(paragElem => {
        paragElem.style.backgroundColor = 'pink'
    })
})
