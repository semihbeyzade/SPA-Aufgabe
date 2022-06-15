import React from "react";
import { useState } from "react";

function Frameworks() {

  const [state, setState] = useState({
    frameworks: [{
      name: 'React',
      version: "18.01",
      bewertung: "Klasse"
    }, {
      name: "Bootstrap",
      version: "5.01",
      bewertung: "ok"
    }]
  })

  

 
    return (
      <div>
        <h1>Wir verwenden folgende Frameworks: </h1>
        { <div>
          {state.frameworks.map((framework, index) => {
            return (
              <ul key={index}>
                <li>{framework.name}</li>
                <li>In der Version: {framework.version}</li>
                <li>Wir finden es: {framework.bewertung}</li>
              </ul>
            )
          })}
        </div> }
      </div>
    );
  
}

export default Frameworks