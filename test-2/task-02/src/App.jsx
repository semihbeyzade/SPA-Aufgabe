import React from "react";
import "./style.css";


const peoples = [
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

function App() {
	return <div className="App">
		{
			peoples.map((people, index) => {
				return (
					<ul key={index}>{people.name}
					{
						people.pets.map((pet, index) => {
							return (
								<li key={index}>{pet.name}: {pet.type}</li>
							)
						})
					}
					</ul>
				)
			})
		}
	</div>;
}

export default App;
