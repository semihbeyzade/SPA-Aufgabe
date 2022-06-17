const elem = document.querySelector("p a")
const outputElem = document.querySelector(".output")
const btnElem = document.getElementById("btn")

btnElem.addEventListener('click', () => {

    outputElem.innerHTML = `
    <ul>
        <li>type: ${elem.type}</li>
        <li>hreflang: ${elem.hreflang}</li>
        <li>rel: ${elem.rel}</li>
        <li>target: ${elem.target}</li>
        <li>href: ${elem.href}</li>  
    </ul>`
})