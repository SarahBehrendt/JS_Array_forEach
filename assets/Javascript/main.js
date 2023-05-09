// Lev 1_1

let getraenke = [
   "Coca-Cola",
   "Apfelsaft",
   "Pepsi",
   "Traubensaft",
   "Sprite",
   "Orangensaft",
   "Red Bull Energy Drink",
   "Fanta"
]

function myDrinks() {
  getraenke.sort();
  getraenke.forEach((elm) => {
    document.write(elm + "<br>");
  });
}
myDrinks();

console.log(getraenke);

//Lev 1_5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];

  let checkNumber1 = checkNumber.map((elm) => {
    if (elm % 3 === 0){
        console.log(elm + 100);
    }else{
        console.log(elm);
    }
  });

 
//Lev 1_6

let album = [
    "holidays.jpg",
 "Restaurant.jpg",
 "desktop",
 "rooms.GIF",
 "DOGATBEACH.jpg",
];

let album2 = album.map((elm) => elm.toLowerCase());
console.log(album2);


const bearbeitung = (dateiname) => {
    if(dateiname.includes(".jpg") == true){
        console.log(dateiname.replace(".jpg", ""));
        return dateiname.replace(".jpg", "");
    } else if (dateiname.includes(".gif") == true){
        console.log(dateiname.replace(".gif", ""));
        return dateiname.replace(".gif", "");
    } else {
        console.log("invalid");
        return "invalid";
    }
}


album2.map(bearbeitung);

let albumNew = album2.map(bearbeitung);
console.log(albumNew);


