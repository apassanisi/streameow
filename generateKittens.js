const axios = require("axios");
const NAMES = [
  "Ace",
  "Ariel",
  "Arrow",
  "Bandit",
  "Bean",
  "Bertram",
  "Breeze",
  "Calypso",
  "Cassie",
  "Cheeks",
  "Cleo",
  "Django",
  "Dorito",
  "Evie",
  "Ewok",
  "Flash",
  "Hunter",
  "Ice",
  "Indi",
  "Izzy",
  "Jazz",
  "Kat",
  "Katnip",
  "Kendra",
  "Lara",
  "Lily",
  "Loki",
  "London",
  "Maggie",
  "Maisy",
  "Millie",
  "Mimi",
  "Missy",
  "Mittens",
  "Mookie",
  "Mr. Business",
  "Natalia",
  "Peanut",
  "Pixie",
  "Pond",
  "Poppy",
  "Pounce",
  "Rex",
  "River",
  "Romeo",
  "Rosie",
  "Rowan",
  "Simba",
  "Smudge",
  "Sophie",
  "Sparrow",
  "Star",
  "Stephen",
  "Susie",
  "Thelma",
  "Tito",
  "Walter",
  "Winnie",
  "Zadie",
];
const REGIONS = [
  "face",
  "weary",
  "pouting",
  "crying",
  "kissing",
  "heart",
  "joy",
];

const randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const generateKitten = (index) => {
  return {
    name: NAMES[index],
    rating: randomNum([4, 5]),
    region: REGIONS[randomNum(REGIONS)],
    favorite: Math.random() < 0.5,
    image: "",
  };
};
let allCats = [];

for (let i = 0; i < 45; i++) {
  allCats.push(generateKitten(i));
}

allCats.forEach((cat) => {
  axios
    .get("https://api.thecatapi.com/v1/images/search", {
      headers: { "x-api-key": "d40d87a1-f945-430b-a773-d4918c34b2bd" },
    })
    .then((res) => {
      cat.image = res.data[0].url;
      console.log(cat)
    });
});
