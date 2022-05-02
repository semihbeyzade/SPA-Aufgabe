# Fetch - Post
Daten zu einer API schicken

### Post requests:
1. Verwende folgendes Objekt

            user = {
                name: 'von Input Name',
                ort: 'von Input Wohnort',
            }
2.  Schicke es mit einem  Post-request zu folgender API geschickt werden: `'https://jsonplaceholder.typicode.com/posts'`        

## Mit Daten von einem Nutzer arbeiten: 

1. Erstelle eine Html-Datei mit einem Formular, in dem der Nutzer Name und Wohnort eingeben kann. 
2. Füge auch einen Button mit dem Text 'Senden' ein. 

3. Nimm die js-Datei von Aufgabe 1 und 2 und verlinkte diese in der html-Datei
3. Mache in der js-Datei folgendes: 

 - Speichere den Input von dem Nutzer in 2 Variablen.
    Hierfür kannst du du Eventlisteners, die auf ein  blur hören, verwenden.
    Baue mit dem Daten ein Objekt, das dein Objekt von Aufgabe 1. ersetzt. z.b. 

            user = {
                name: 'von Input Name',
                ort: 'von Input Wohnort',
            }
- Wenn der Nutzer auf den Button klickt, sollen die Daten in einem Post-request zu folgender API geschickt werden: `'https://jsonplaceholder.typicode.com/posts'`

- Wenn die Daten erfolgreich geschickt sind, gib einen Text auf der Website aus. 
- Füge auch Fehlerbehandlung hinzu!
