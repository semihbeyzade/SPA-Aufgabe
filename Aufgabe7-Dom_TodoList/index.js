const inputElem = document.getElementById('input')
const btnElem = document.getElementById('add-btn')
const listGroupItem = document.querySelector('.list-group')

btnElem.addEventListener('click', addTodo)




function addTodo(e) {

    let newTodo = inputElem.value.trim()
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = `<i class = 'fa fa-remove text-dark me-2'></i><i class="fas fa-check text-dark"></i>`;

    listItem.className = "list-group-item d-flex justify-content-between  bg-warning w-50";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    listGroupItem.appendChild(listItem);
    inputElem.value = "";

    e.preventDefault()


}


listGroupItem.addEventListener('click', (e) => {

    if (e.target.className === "fa fa-remove text-dark me-2") {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.className === "fas fa-check text-dark") {
        e.target.parentElement.parentElement.style.setProperty("text-decoration", "line-through");
    }
    
})