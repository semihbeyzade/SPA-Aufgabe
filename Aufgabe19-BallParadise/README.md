# Spielplatz für Bälle

In dieser Aufgabe geht es darum sich in einem größeren Projekt bei dem man nicht alles zu 100%
versteht zurecht zu finden. 

Du wirst einige kleiner Aufgaben bekommen bei denen es darum geht den vorhanden code zu begreiffen 
und zu ergänzen.    
   
## BallGenerator.js

Arbeite zu erst **nur** in der BallGenerator.js
1. Ergänze die Componente BallGenerator um einen weiteren Input vom typ "range". Der Input soll die State-Variable 
"size" Steuern und Werte zwischen 1 und 100 haben können
2. Gib die aktuelle "size" im <div> "meta-ball" aus
3. Ändere die statische größe in der "gehSpielen()"-funktion so dass Sie ebenfalls die "size" State-Variable verwendet
4. importiere die Componente Ball und füge Sie im div "next-ball" ein. Beachte, dass du die farbe und größe richtig übergibst. Die Farbe ist ein array [r,g,b].

## Ball.js
falls es nach dem importieren der Ball.js probleme gibt prüfe ob die parameter color und size richtig übergeben worden.
1. Ergänze das Style attribut so, dass die größe des Ball-<div> von parameter size abhängig ist. Wenn du alles richtig gemacht hast, 
dann kannst du jetzt mit deinem neuen Range-Input die Größe des Balls steuern und mit den anderen Inputs die Farbe.

## Allgemein
Die funktion "handleAddBall" erstellt einen neuen Ball und fügt ihn in der State-Variable "balls" ein
Die Componente BallPark bekommt alle Bälle und malt diese in den BallPark

## BallPark.js
Alle Bälle sin in props.ball. 
Jeder Ball hat die Eigenschaften ``ballid, color, size, left, top``
1. Gehe über alle Bälle und füge für jeden Ball eine <Ball>-Componente im <div> "BallPark" ein. 
2. Wenn du die Parameter richtig machst, dann werden bei einem Klick auf "geh spielen" neue Bälle mit verschiedenen größen und farben eingefügt
3. wenn auf einen Ball geklickt wird, soll die funktion removeBall aufgerufen werden

## Erweiterungen
1. Ergänze den BallGenerator durch einen Button "Random Ball". Ein Click auf diesen Button soll alle range <input> auf zufällige Werte setzen, damit ein zufälliger Ball erzeugt wird.
2. Ändere handleRemoveBall so, dass geklickte Bälle nicht einfach entfernt werden sondern in einer State-Variable "removedBalls" gespeichert werden
3. Erstelle eine neue Componente "RemovedBalls" und zeige dort alle entfernten Bälle neben einander an. 
   
![React App - Google Chrome 2022-05-05 02 50 13](https://user-images.githubusercontent.com/5030629/166854141-11d6e219-3255-43cc-8d60-5d322f73c1c9.jpg)
