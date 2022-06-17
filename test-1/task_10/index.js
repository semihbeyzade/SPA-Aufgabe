const calculateBtn = document.getElementById('submit')
const radiusElem = document.getElementById('radius')
const volumElem = document.getElementById('volume')

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const pi  = Math.PI
    let volume = 4 / 3 * pi * (radiusElem.value ** 2)
    volumElem.value = volume
})