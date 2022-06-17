const showAlertBtn = document.getElementById('showAlert')
const colorOptionElem = document.getElementById('mySelect')
console.log(colorOptionElem.length);


showAlertBtn.addEventListener('click', () => {
 alert(`There is ${colorOptionElem.length} colors.`)
   

   
})