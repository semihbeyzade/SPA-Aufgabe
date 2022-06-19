import React, {useState} from "react";
import "./style.css";

function App() {

	const [name, setName] = useState("Sem")
	const [age, setAge] = useState(25)

	return <div className="App">
     <p>Display Name :<span>{name}</span></p>
	 <p>Display Age :<span>{age}</span></p>
	 <div className="input1">
	 <label>
    Name: <br />
     <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
     </label>
	 </div>
	 <div className="input2">
	 <label>
    Age: <br />
    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" name="name" />
    </label>
	</div>
	</div>;
}

export default App;
