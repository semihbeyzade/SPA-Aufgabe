import React from "react";
import { useState } from "react";

function Clock() {

  const [state, setState] = useState({date: new Date()})


 
    return (
      <div>
        <h1>Wie spät ist es?</h1>
        <h2>It is {state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  
}

export default Clock

