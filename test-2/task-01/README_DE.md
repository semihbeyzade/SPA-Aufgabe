### 1. [Daten mit JSX anzeigen](https://www.robinwieruch.de/react-pass-props-to-component)

In dieser Aufgabe geben wir dir die "Benutzerdaten" vor und du musst sie mit JSX anzeigen. Die wichtigsten Aufgaben sind:

- Daten anzeigen
- Binde die Daten an ein HTML-Attribut `<img src=`
- Erstelle einen Link zum Twitter-Profil des Benutzers:  `https://twitter.com/chrisoncode`

```js
const user = {
	name: "Chris on Code",
	location: "Las Vegas",
	foodType: "Everything",
	age: 28,
	likes: "Coding into the wee hours of the morning",
	twitterUsername: "chrisoncode",
	avatar:
		"https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png",
};
```

![](https://scotch-res.cloudinary.com/image/upload/dpr_1,w_700,q_auto:good,f_auto/v1557347114/ngnf9bhkbvrh4hmfydse.png)

![AGPL Happy coding](https://img.shields.io/badge/Happy_coding-</>-blue.svg)


Bonus-Herausforderungen, die du abschließen kannst, sind:

- Erstelle eine wiederverwendbare Komponente für die Benutzerdetails. Übergib ihr Daten mit Hilfe von Props.
