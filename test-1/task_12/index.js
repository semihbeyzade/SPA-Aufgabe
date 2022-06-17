const strongElems = document.querySelectorAll('strong')

strongElems.forEach(strongElem => {
    strongElem.addEventListener('mouseover', () => {
        strongElem.style.backgroundColor = 'greenyellow'
        strongElem.style.cursor = 'pointer'
    })
}) 

