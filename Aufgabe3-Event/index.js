const btnToggleElem = document.getElementById('btn-toggle')
const listGroupElem = document.querySelector('.list-group')
const messageElem = document.querySelector('.message')


btnToggleElem.addEventListener('click', () => {
    listGroupElem.classList.toggle('d-none')
    btnToggleElem.innerHTML = 'Hide destinations'
    messageElem.innerHTML = ''

})

listGroupElem.addEventListener('click', (e) => {

    messageElem.innerText = `You selected ${e.target.innerText}`
    messageElem.style.backgroundColor = '#FDD7AA'


})