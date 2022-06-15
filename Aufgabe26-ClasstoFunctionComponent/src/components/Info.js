import React from "react";
import { useState } from "react";

function Info() {

  const[state, setState] = useState({
    name: 'Digital Natives',
    fach: 'Web Development'
  })
 

 
    return (
      <div>
        <h2>Wir sind die {state.name} und wir machen {state.fach}</h2>
      </div>
    );
  
}

export default Info