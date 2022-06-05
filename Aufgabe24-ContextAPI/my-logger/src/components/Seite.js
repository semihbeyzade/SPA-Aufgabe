import React from 'react'
import { useContext } from 'react'
import { StatusContext } from '../context/StatusContext'
import Eingeloggt from './Eingeloggt'
import Ausgeloggt from './Ausgeloggt'
import Button from './Button'

function Seite() {

    const {isLogedIn} = useContext(StatusContext)
  return (
    <div>

        <Button />
        <br></br>

        {
          isLogedIn ? <Eingeloggt /> : <Ausgeloggt />
        }

    </div>
  )
}

export default Seite