### 2.  [Die Anzeige von Listen ist in jeder Anwendung, die wir erstellen, wichtig. Mit JSX können wir Listen mithilfe der in JavaScript integrierten Methode Array.map() anzeigen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

Die Methode .map() wird oft verwendet, um ein Datenelement in ein anderes umzuwandeln. In unserem Szenario nehmen wir Daten und wandeln sie in einen Teil unserer Ansicht um.

- a. Nehmen wir an, wir haben eine Liste von "Benutzern", die wir in einer Liste anzeigen wollen:

```js
const people = [
	{ id: 1, name: "chris" },
	{ id: 2, name: "nick" },
];
```

- b. Für verschachtelte Listen haben wir die Möglichkeit, eine Map innerhalb einer Map zu erstellen. Achte darauf, deine Variablen genau zu benennen, damit du weißt, welche Daten du verwendest.

```js
const people = [
	{
		name: "chris",
		pets: [
			{ name: "bella", type: "dog" },
			{ name: "cocoa", type: "dog" },
		],
	},
	{
		name: "nick",
		pets: [
			{ name: "hilo", type: "cat" },
			{ name: "polly", type: "cat" },
		],
	},
];
```
![AGPL Happy coding](https://img.shields.io/badge/Happy_coding-</>-blue.svg)
