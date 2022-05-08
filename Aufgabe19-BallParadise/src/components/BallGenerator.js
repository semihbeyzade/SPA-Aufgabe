import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import Ball from './Ball';


function BallGenerator(props){

  const [r,setR] = useState(50)
  const [g,setG] = useState(50)
  const [b,setB] = useState(50)
  const [size,setSize] = useState(50)


  const gehSpielen = () => {
    props.addBall(
      {
        size: size,
        color:[r,g,b],
        ballId: uuidv4()
      }
    )
  }

  return (
    <div id="BallGenerator">
      <div className="slidecontainer">
      <label htmlFor="input-size">Größe:</label>
        <input type="range" min="1" max="100"
               value={size}
               className="slider" id="input-s"
               onChange={(event)=>setSize(parseInt(event.target.value))} />
        <label htmlFor="input-r" className="redlabel">Rot:</label>
        <input type="range" min="0" max="255"
               value={r}
               className="slider" id="input-r"
               onChange={(event)=>setR(parseInt(event.target.value))} />
        <label htmlFor="input-g">Grün:</label>
        <input type="range" min="0" max="255"
               value={g}
               className="slider" id="input-g"
               onChange={(event)=>setG(parseInt(event.target.value))} />
        <label htmlFor="input-g">Blau:</label>
        <input type="range" min="0" max="255"
               value={b}
               className="slider" id="input-b"
               onChange={(event)=>setB(parseInt(event.target.value))} />
      </div>
      <div className="next-ball">
          
  
          <Ball size={size} color={[r,g,b]} ></Ball>
          

      </div>
      <button onClick={gehSpielen}>Geh Spielen</button>
    </div>
  )
}
export default BallGenerator