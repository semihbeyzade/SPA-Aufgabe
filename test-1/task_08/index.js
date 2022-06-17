const colorDeleteBtn = document.querySelector('#colorDelete')
const colorsElem = document.querySelector('#colorSelect')


colorDeleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    colorsElem.remove(colorsElem.selectedIndex)
})