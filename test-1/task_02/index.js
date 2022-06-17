const FnameElem = document.querySelector('#fname')
const LnameElem = document.querySelector('#lname')
const outputElem = document.querySelector('#output')
const btnElem2 = document.querySelector('#getFormValue')

btnElem2.addEventListener('click', (e) => {
    e.preventDefault()
    outputElem.innerHTML = `${FnameElem.value} ${LnameElem.value}`
})