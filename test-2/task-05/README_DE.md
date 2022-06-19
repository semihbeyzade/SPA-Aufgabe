### 5. [Erstelle eine React-Zustandsvariable, die API-Daten enthält](https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf)

Wir brauchen eine Möglichkeit, Daten zu speichern, die wir von der API erhalten. Wir verwenden [React's useState](https://reactjs.org/docs/hooks-state.html):

Viele Webanwendungen und Websites verlassen sich bei der Datenbeschaffung auf APIs und Dienste von Drittanbietern.

Schauen wir uns an, wie man eine API-Anfrage an einen API-Dienst eines Drittanbieters stellt. Dies ist eine offene API. Sie erfordert daher keine Authentifizierung.

Wir werden die [Game of Thrones API](https://anapioficeandfire.com/) (auch bekannt als API of Fire and Ice) nutzen, um alle 12 Game of Thrones-Bücher abzurufen und die einzelnen Details zu jedem Buch anzuzeigen.

Wir werden die in JavaScript integrierte [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) verwenden, um Daten von der API zu holen. Du kannst jede beliebige HTTP-Bibliothek für dein Projekt verwenden, z. B. [axios](https://github.com/axios/axios). Wir verwenden die in Fetch integrierte Bibliothek, weil wir kein Paket installieren müssen.

Wir holen die Daten in 3 Schritten ab und zeigen sie an:

- Erstelle eine React-Zustandsvariable, um Daten zu speichern
- Erstelle die API-Anfrage und speichere die Daten
- Rendern der zurückgegebenen Daten

![AGPL Happy coding](https://img.shields.io/badge/Happy_coding-</>-blue.svg)