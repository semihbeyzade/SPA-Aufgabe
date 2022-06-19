import React, {useState} from "react";
import "./style.css";

function App() {
    
	const [up, setUp] = useState(50)
    
	return <div className="App">
		<button onClick={() => setUp(up + 6)}>&#9757;Move Up&#9757;</button>
		<div className="box" style={{bottom: `${up}%`}}></div>
	</div>;
}

export default App;
