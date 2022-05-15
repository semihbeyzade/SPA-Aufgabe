import { useState } from "react";
import Aufgabe from "./Aufgabe";

const ToDoListe = () => {
  const [aufgaben, setAufgaben] = useState([
    { text: "Einkaufen gehen", done: false, id: 1, farbe: "schwarz" },
    { text: "Eis essen", done: false, id: 2, farbe: "schwarz" },
    { text: "Spielen", done: false, id: 3, farbe: "schwarz" },
    { text: "Schlafen", done: false, id: 4, farbe: "schwarz" },
    { text: "Programmieren", done: true, id: 5, farbe: "schwarz" },
    { text: "Aufstehen", done: false, id: 6 },
  ]);
  // Funktion um done von false auf true zu ändern:
  // braucht das Id von Aufgabe
  const aufgabeAlsErledigtMarkieren = (id) => {
    // kopie von aufgaben, hier ändern wir
    let geänderteKopie = aufgaben.map((aufgabe) => {
      // // das element auf dem wir geklickt haben finden!
      if (aufgabe.id === id) {
        // done von false zu true
        aufgabe.done = !aufgabe.done;
        return aufgabe;
      } else {
        return aufgabe;
      }
    });
    // setAufgaben, um die neue Array in state zu speichern:
    setAufgaben(geänderteKopie);
  };

  // filter funktionen:

  let nichtErledigteAufgaben = aufgaben.filter((aufgabe) => !aufgabe.done);
  let erledigteAufgaben = aufgaben.filter((aufgabe) => aufgabe.done === true);

  function handleRemove(id) {
    let newAufgaben = aufgaben.filter((item) => item.id !== id);
    setAufgaben(newAufgaben);
  }

  
  

  function handleZuruckAlle() {
    let newAufgaben = aufgaben.map((item) => {
      item.done = false;
      return item;
    });
    setAufgaben(newAufgaben);
  }

  function handleErledigenAlle() {
    let newAufgaben = aufgaben.map((item) => {
      item.done = true;
      return item;
    });
    setAufgaben(newAufgaben);
  }

  function handleLoeschAlle() {
    setAufgaben([]);
  }

  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const addTask = (userInput) => {
    let copy = [...aufgaben];
    copy = [...copy, { id: aufgaben.length + 1, text: userInput, done: false }];
    setAufgaben(copy);
  };

  const editAufgabe = (id, newValue) =>{
    let kopie = aufgaben.map(aufgabe => {
      if(aufgabe.id === id){
        aufgabe.text = newValue
      }
      return aufgabe;
    })
    setAufgaben(kopie)
    
    
  }

  return (
    <div className="ToDoListe">
      <h2>Das sind meine Aufgaben:</h2>
      <div>
        <button onClick={handleErledigenAlle}>Alle erledigen</button>
        <button onClick={handleZuruckAlle}>Alle zurücksetzen</button>
        <button onClick={handleLoeschAlle}>Alle löschen</button>
      </div>
      <ul>
        {/* Schritt 2: nur nicht erledigte aufgaben anzeigen */}
        {nichtErledigteAufgaben.map((aufgabe) => {
          return (
            <Aufgabe
            
              text={aufgabe.text}
              key={aufgabe.id}
              handleRemove={handleRemove}
              editAufgabe={editAufgabe}
              number={aufgabe.id}
              // Schritt 3: onClick um als erledigt zu markieren
              aufgabeAlsErledigtMarkieren={aufgabeAlsErledigtMarkieren}
              farbe={aufgabe.farbe}
              done={aufgabe.done}
            />
          );
        })}
      </ul>
      <h2>Das habe ich schon erledigt:</h2>
      {/* Schritt 1: nur erledigte aufgaben anzeigen; Ausfilter wo done == true */}
      {/*Geht auch: { aufgaben.filter((aufgabe) => aufgabe.done )} */}
      {/* [{ text: "Programmieren", done: true, id: 5, farbe: 'blau' }] */}
      {erledigteAufgaben.map((aufgabe) => {
        return (
          <Aufgabe
            handleRemove={handleRemove}
            editAufgabe={editAufgabe}
            text={aufgabe.text}
            key={aufgabe.id}
            number={aufgabe.id}
            // Schritt 3: onClick um als erledigt zu markieren
            aufgabeAlsErledigtMarkieren={aufgabeAlsErledigtMarkieren}
            farbe={aufgabe.farbe}
            done={aufgabe.done}
          />
        );
      })}
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Add Aufgabe..."
        />
        <button type="submit">ADD-AUFGABE++</button>
      </form>

      {/* Schritt 4: aufräumen mit Container? */}
    </div>
  );
};

export default ToDoListe;
