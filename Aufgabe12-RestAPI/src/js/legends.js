 const legends =
  [{
    id:"mj23",
    pers: {
      name: "Jordan",
      firstName: "Michael",
      gender: "male",
      birthDate:"1963-02-17",
      height: "198"
    },
    career:{
      sport: "Basketball",
      netWorth: "22000000000",
      honors:[{
        title:"NBA Champion",
        count:"6"
      },{
        title:"NBA Finals MVP",
        count:"6"
      },{
        title:"NBA MVP",
        count:"5"
      },{
        title:"NBA Scorring Leader",
        count:"10"
      },{
        title:"Olympic Gold",
        count:"2"
      },{
        title:"Naismith Memorial Basketball Hall of Fame inductee",
      }
      ]
    },
    img:"https://s.hs-data.com/gfx/person/l/417087.jpg",
    link:"https://de.wikipedia.org/wiki/Michael_Jordan"
  },{
    id:"cr7",
    pers: {
      name: "Ronaldo",
      firstName: "Cristiano",
      gender: "male",
      birthDate:"1985-02-05",
      height: "187"
    },
    career:{
      sport: "Fußball",
      netWorth: "1000000000",
      honors:[{
        title:"Europameister",
        count:"1"
      },{
        title:"Champions-League-Sieger",
        count:"5"
      },{
        title:"Weltfußballer des Jahres",
        count:"5"
      },{
        title:"Torschützenkönig Champions League",
        count:"7"
      },{
        title:"Meister in Nationalen Ligen",
        count:"7"
      }
      ]
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    link:"https://de.wikipedia.org/wiki/Cristiano_Ronaldo"
  },{
    id:"serena",
    pers: {
      name: "Williams",
      firstName: "Serena",
      gender: "female",
      birthDate:"1981-09-26",
      height: "175"
    },
    career:{
      sport: "Tennis",
      netWorth: "250000000",
      honors:[{
        title:"WTA Player of the Year",
        count:"7"
      },{
        title:"Sportler des Jahres",
        count:"1"
      },{
        title:"Grand-Slam-Titel",
        count:"39",
        details:"23 Einzeln, 14 Doppe, 2 Mixed"
      }
      ]
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Serena_Williams_Wimbledon_2015.jpg/250px-Serena_Williams_Wimbledon_2015.jpg",
    link:"https://de.wikipedia.org/wiki/Serena_Williams"
  },{
    id:"ali",
    pers: {
      name: "Ali",
      firstName: "Muhammad",
      gender: "male",
      birthDate:"1942-01-17",
      height: "191"
    },
    career:{
      sport: "Boden",
      netWorth: "50000000",
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/240px-Muhammad_Ali_NYWTS.jpg",
    link:"https://de.wikipedia.org/wiki/Muhammad_Ali"
  },{
    id:"ronda",
    pers: {
      name: "Rousey",
      firstName: "Ronda",
      gender: "female",
      birthDate:"1987-02-01",
      height: "170"
    },
    career:{
      sport: ["MMA, Judo"],
      netWorth: "13000000",
    },
    img:"https://sportbild.bild.de/fotos-skaliert/ronda-rousey-macht-auch-beim-wiegen-eine-gute-figur-39630997-39979410/2,w=467,c=0.sport.jpg",
    link:"https://de.wikipedia.org/wiki/Ronda_Rousey"
  },{
    id:"bolt",
    pers: {
      name: "Bolt",
      firstName: "Usain",
      gender: "male",
      birthDate:"1986-08-21",
      height: "195"
    },
    career:{
      sport: "Sprinten",
      netWorth: "90000000",
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Usain_Bolt_smiling_Berlin_2009.JPG/260px-Usain_Bolt_smiling_Berlin_2009.JPG",
    link:"https://de.wikipedia.org/wiki/Usain_Bolt"
  },{
    id:"100m",
    pers: {
      name: "Griffith-Joyner",
      firstName: "Florence",
      gender: "female",
      birthDate:"1959-12-21",
      height: "170"
    },
    career:{
      sport: "Sprinten",
      netWorth: "1500000",
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Florence_Griffith_Joyner.jpg/1920px-Florence_Griffith_Joyner.jpg",
    link:"https://de.wikipedia.org/wiki/Florence_Griffith-Joyner"
  },{
    id:"tony",
    pers: {
      name: "Hawk",
      firstName: "Tony",
      gender: "male",
      birthDate:"1968-05-12",
      height: "185"
    },
    career:{
      sport: "Skateboarding",
      netWorth: "140000000",
    },
    img:"https://www.ispo.com/sites/default/files/styles/gallery/public/2019-01/1279479258_9826_tonyhawkmadonnacredit_antton_0.jpg?h=e25354c0&itok=EnbK6drB",
    link:"https://de.wikipedia.org/wiki/Tony_Hawk"
  },{
    id:"Billie",
    pers: {
      name: "King",
      firstName: "Billie Jean",
      gender: "female",
      birthDate:"1943-11-22",
      height: "164"
    },
    career:{
      sport: "Tennis",
      netWorth: "20000000",
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Billie_Jean_King_%C2%A9Lynn_Gilbert_1978.jpg",
    link:"https://de.wikipedia.org/wiki/Billie_Jean_King"
  },{
    id:"simone",
    pers: {
      name: "Biles",
      firstName: "Simone",
      gender: "female",
      birthDate:"1997-03-14",
      height: "142"
    },
    career:{
      sport: "Turnen",
      netWorth: "16000000",
    },
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Simone_Biles_Rio_2016e.jpg/255px-Simone_Biles_Rio_2016e.jpg",
    link:"https://de.wikipedia.org/wiki/Simone_Biles"
  }
];

 let legendsData = JSON.stringify(legends)
export { legendsData };
 