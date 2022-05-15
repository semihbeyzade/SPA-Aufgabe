import React from 'react'

function Result(props) {
  return (
    <div className='result-component'>
        <p>Hi {props.Name}. Wir haben deine Bestellung erhalten!!</p>
        <p>Hamburger :{props.Hamburger}</p>
        <p>Cola :{props.Cola}</p>
        <p>Eis :{props.Eis}</p>
        <p>Die Summe :{props.Preis} €</p>
        <h3>Persönliche Daten</h3>
        <p>Email: {props.Email} </p>
        <p>Phone: {props.Phone}</p>
    </div>
  )
}

export default Result;