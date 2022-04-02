const btnElem = document.querySelector('button')
const textElem = document.getElementById('text')
const inputElem = document.querySelector('input')

btnElem.addEventListener('click', () => {
    const value = inputElem.value
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'freiday', 'saturday']
    let date = new Date()
    let day = days[date.getDay()]
    let weekend = 6 - (date.getDay())
    if (weekend === 0 || weekend === 6) {
        weekend = 'at the weekend';
        textElem.innerHTML = `Hello ${value}. Today is ${day}. You are ${weekend}.`
    } else {
        textElem.innerHTML = `Hello ${value}. Today is ${day}. Only ${weekend} days left until weekend!`
    }




})