# Lichtschalter

Arbeite mit [Create react app](https://create-react-app.dev/docs/getting-started/) um ein neues Projekt zu erstellen. 


1. Erstellen Sie eine Komponente <Raum> mit einem "Lichtschalter"-Button und einem Text, der "Der Raum ist beleuchtet" oder "Der Raum ist dunkel" beschreibt. 
2. Ein Klick auf den Button soll das Licht an- und ausschalten und den Text aktualisieren.
3. Verwenden Sie den useState-Hook, um den Zustand des Lichtschalters zu speichern.
  
 **Hinweis: Du kannst den Css Code von unten für das Styling verwenden**


# lightSwitch

Use  [Create react app](https://create-react-app.dev/docs/getting-started/) to create a new project. 


1. Create a Room component with a "lightswitch" button and some text describing "The room is lit" or "The room is dark". 
2. Clicking the button should toggle the light on and off, and update the text.
3. Use the useState hook to store the lightswitch state.

```css
html,
body,
#root,
.room {
  height: 100vh;
  margin: 0;
  text-align: center;
  font-family: "Georgia", serif;
  font-size: 1.5rem;
}

button {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}

.room {
  padding: 30px;
}

.lit {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}

```
