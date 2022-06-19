import React from "react";
import "./style.css";

const user = {
	name: "Chris on Code",
	location: "Las Vegas",
	foodType: "Everything",
	age: 28,
	likes: "Coding into the wee hours of the morning",
	twitterUsername: "chrisoncode",
	avatar:
		"https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};

function App() {
	return <div className="App">
		<img src={user.avatar} alt="avatar"/>
		<h1 className="name">{user.name}</h1>
		<span>Location</span>
		<p>{user.location}</p>
		<span>Eats</span>
		<p>{user.foodType}</p>
		<span>Age</span>
		<p>{user.age}</p>
		<span>Likes</span>
		<p>{user.likes}</p>
		<span>Twitter</span>
		<p className="twitterUsername" >@{user.twitterUsername}</p>
	</div>;
}

export default App;
