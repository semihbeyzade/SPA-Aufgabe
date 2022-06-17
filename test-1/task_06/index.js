const blurElem = document.getElementById("blurElem")
const output = document.getElementById("show")

blurElem.addEventListener('blur', () => {
    output.innerHTML = blurElem.value;
})