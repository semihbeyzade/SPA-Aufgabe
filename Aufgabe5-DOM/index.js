const headerElem = document.querySelector('header')
headerElem.style.border = '5px solid'

const pageTitleElems = document.querySelectorAll('.package-title')
pageTitleElems.forEach(pageTitleElem => {
    pageTitleElem.previousElementSibling.style.border = '3px solid'
})

const labelElems = document.querySelectorAll('.info-package label')
labelElems.forEach(labelElem => {
    if (labelElem.className === 'mild') {
        labelElem.style.textDecoration = 'underline yellow'
    } else if (labelElem.className === 'intense') {
        labelElem.style.textDecoration = 'underline orange'

    } else {
        labelElem.style.textDecoration = 'underline red'
    }
})

const siteMap = document.querySelector('.site-map')
siteMap.innerHTML = ` 
           <li class="link"><a style="color: white;" href="#">About</a></li>
           <li class="link"><a style="color: white;" href="#">Contact</a></li>
           <li class="link"><a style="color: white;" href="#">Prices</a></li>`