### 2. [Show a list of items](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

Before you start coding make sure to:

- Navigate to the directory `task-02` in your terminal
- Run `npm i` or `npm install`

Showing a list of items is crucial in every single application we'll build. Using JSX we can show lists using JavaScript's built-in Array.map() method.

The .map() is often used to take one piece of data and convert it to another. In our scenarios, we are taking data and converting it to a piece of our view.

- a. Let's say we have a list of `users` that we want to show in a list:

```js
const people = [
	{ id: 1, name: "chris" },
	{ id: 2, name: "nick" },
];
```

- b. For nested lists, we have the ability to create a map within a map. Make sure to name your variables with good detail so you know which data you are using.

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
