const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
      preis:25
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
      preis:29.99
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
      preis:32.50
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
    preis:17.45
  }
];

const listElem = document.querySelector('.book-list')

books.forEach(book=>{
  listElem.innerHTML += `
  <li class="mb-4 list-group-item " >
  <div>
    <div>
      <img src="${book.img}">
    </div>
    <p class="mt-2" >${book.title}</p>
    <p class="text-secondary">${book.author}</p>
  
    <div class="p-2 bg-light d-flex justify-content-between">
    <p class="preis invisible"" >${book.preis}$</p>
    <button class="rounded-pill bg-${book.alreadyRead ? 'success' : 'danger'} text-white" >${book.alreadyRead ? 'Read' : 'To Read' }</button>
    </div>
  </div>
  </li>`
  
})

const imgElems = document.querySelectorAll('img')
imgElems.forEach(imgElem=>{
  imgElem.addEventListener('click',()=>{
    const preisElem = imgElem.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[0]
    
   preisElem.classList.toggle('invisible')
  })
})

