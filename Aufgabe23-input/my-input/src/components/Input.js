import React, { useState } from 'react'


function Input() {

    const [inputText, setInputText] = useState("")
  return (
    <div>
        <h1>Gibt ein Text</h1>
        <input className='input' onChange={(e) => setInputText(e.target.value)}  onBlur={() => setInputText("")} />
        <p>{inputText}</p>
    </div>
  )
}

export default Input