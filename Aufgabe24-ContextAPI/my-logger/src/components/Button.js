import React from 'react'
import { useContext } from 'react'
import { StatusContext } from '../context/StatusContext'

function Button() {
    const {toggleLogin, isLogedIn} = useContext(StatusContext)
  return (
    <div>
        <button  onClick={toggleLogin} >{isLogedIn ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Button