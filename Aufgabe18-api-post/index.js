let user = {
    name: 'von Input Name',
    ort: 'von Input Wohnort',
}


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response => response.json())
.then(data => console.log(data), alert("es hat geklappt"))
.catch(err => console.log(err))

// Teil 2
// objekt bauen
// wir starten mit einem leeren Objekt
let nutzer = {}
// input elemente holen:
let nameInput = document.querySelector('#name')
let ortInput = document.querySelector('#ort')

// button holen: 
let button = document.querySelector('button')


// event listeners input: hier fügen wir die Werte als Eigenschaften vom Objekt hinzu.

nameInput.addEventListener('blur', (event) => {
  nutzer.name = event.target.value
})

ortInput.addEventListener('blur', (event) => {
  nutzer.ort = event.target.value
})

// funktion zum Daten senden: 
const datenSenden = (event) => {
  event.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.status === 201 || response.status === 200) {
      return response.json();
    } else {
      console.log("fehler");
      throw new Error('da ist was schief gelaufen')
    }
  })
    .then((daten) => {
      console.log(daten)
      document.querySelector('div').innerHTML = `<p>Erfolgreich gesendet</p> `
    }).catch((error) => {
      console.log(error.message);
      document.querySelector('div').innerText = error.message
  })
}

// das selbe mit async await; 

const datenSchicken = async (event) => {
  event.preventDefault()
  try {

  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  if (response.status !== 201) {
    throw new Error('da ist was schief gelaufen')
  } 
  let antwortVonApi = await response.json();
  console.log(antwortVonApi)
  document.querySelector('div').innerHTML = `<p>Erfolgreich gesendet</p> `
  } catch(error){
    document.querySelector('div').innerText = error.message
  }
}


// event listener button
button.addEventListener('click', datenSenden)