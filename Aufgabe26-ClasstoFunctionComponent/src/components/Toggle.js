import React from "react";
import { useState } from "react";

function Toggle() {
  const [state, setState] = useState(true)
 

  const handleClick = () => {
     setState(!state)
  }

  
    return (
      <button onClick={handleClick}>
        {state ? 'ON' : 'OFF'}
      </button>
    );
  
}

export default Toggle