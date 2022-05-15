import { useState } from 'react'
import './Aufgabe.css'
const Aufgabe = (props) => {

  const [edit, setEdit] = useState(false)
  const [currentVal, setCurrentVal] = useState(props.text)
  
  return (
  <li 
   
    className={`Aufgabe ${props.farbe??  'wennFarbeFehlt' }`} 
    style={{ backgroundColor:  props.done ? ('gray') : ('red')}}
    id={props.number} 
    onClick={() => {
      // funktion rufen von props, mit id (number) als parameter
      /* props.aufgabeAlsErledigtMarkieren(props.number) */
    }}
  
  > {
    (edit === false)?<span>{props.text}</span>:<input value={currentVal} onChange={(e)=>{ setCurrentVal(e.target.value)}} />
  }
  
  
  
  <div className='btn' >
    <button onClick={() => {
      props.aufgabeAlsErledigtMarkieren(props.number)
    }} >
      {(props.done === false)? 'erledigen' : 'zurücksetzen'}
    </button>
    <button onClick={() => props.handleRemove(props.number)} >
      Löschen
    </button>
    <button onClick={() => {
      setEdit(!edit)
      props.editAufgabe(props.number, currentVal)
    }} >{(edit === false) ? "Edit":"OK"}</button>
  </div>
  </li>
  )
}

export default Aufgabe
