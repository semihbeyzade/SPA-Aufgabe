import React, {useEffect} from "react";
import { useState } from "react";

function App() {
	const [data, setData] = useState([])
	
	useEffect(() => {
     
		const url = `https://www.anapioficeandfire.com/api/books`
	   
		const fetchData = async () => {
		  try {
			const response = await fetch(url);
			const json = await response.json();
			setData(json) 
		  } catch (error) {
			console.log("error", error);
		  }
		};
	
		fetchData();
	  }, []);

	 

	return <div className="App">
		<h1 style={{color: "blue"}}>Game of Thrones-Bücher</h1>
     {
		 data.length !== 0 && data.map((book) => {
			 return(
				 <p>{book.name}</p>
			 )
		 })
	 }
	</div>;
}

export default App;
