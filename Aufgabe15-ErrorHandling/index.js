// Das hier ist dein Starter code: Es wird ein Essen aus dem Datenbank 'the meal bd' geholt.
// Füge Fehlerbehandlung hinzu!
let responsePromise = fetch("https://www.themealdb.com/api/json/v1/1/random.php");
responsePromise.then(response => {
        if(response.status === 200) {
            return response.json()
        }else{
            throw new Error('Konnte Daten nicht Posten!')
        }
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
  })

