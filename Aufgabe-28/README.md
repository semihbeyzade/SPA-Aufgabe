# Daten von Objekten ausgeben

Wir verewenden Inhalte von Objekten, um Datan auf der Website zu zeigen. Stellt euch vor, dass folgendes Informationen über einen Kunden sind: 


```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

Um eine beliebige Eigenschaft des Objekts "Kunde" abzurufen, müssen wir den Punktoperator wie folgt verwenden:

```js
console.log(customer.first_name); // will print "Bob" on the console.
```

# Anleitung

## Setup: 
1. Clone dieses Repository und öffne es mit Visual Studio Code. 
2. Führe `npm install` aus, um alle Pakete im Projekt zu installieren,
3. Führe `npm start` aus, um die Seite im Browser zu starten. 


## Aufgabe: 

Öffne die Datei "App.js" und erstelle den erforderlichen Code, damit sie Datei die folgende Ausgabe in das DOM überträgt:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```

--- 

# Rendering data from objects

Now lets use a more complex variable to render our HTML, let's say we have the following JS Object containing a customer information:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

To retrieve any property from the `Customer` object we have to use the dot `.` operator like this:

```js
console.log(customer.first_name); // will print "Bob" on the console.
```

# Instructions

## Setup: 
1. clone this repositiry and open it with Visual Studio Code. 
2. run `npm install` to install all packages in the project,
3. run `npm start` to start the page in the browser. 


## Task
Open the `App.js` and create the necesary code to make your file render the following output into the DOM:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```
