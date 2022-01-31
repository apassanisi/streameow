const NAMES = [
  "Ace",
  "Ariel",
  "Ariel",
  "Arrow",
  "Bertram",
  "Breeze",
  "Calypso",
  "Cassie",
  "Cheeks",
  "Cleo",
  "Evie",
  "Ewok",
  "Ewok",
  "Flash",
  "Hunter",
  "Ice",
  "Indi",
  "Izzy",
  "Katnip",
  "Kendra",
  "Lara",
  "Lily",
  "London",
  "Maggie",
  "Maisy",
  "Mimi",
  "Mittens",
  "Mr. Business",
  "Natalia",
  "Paw McCartney",
  "Peanut",
  "Pixie",
  "Pond",
  "Poppy",
  "Pounce",
  "Rex",
  "River",
  "Rosie",
  "Rowan",
  "Smudge",
  "Sophie",
  "Sparrow",
  "Stephen",
  "Susie",
  "Thelma",
  "Winnie",
  "Zadie",
];
const REGIONS = [
  "face", "weary", "pouting", 'crying', 'kissing', 'heart', 'joy'
];

const randomNum = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const generateKitten = (index) => {
  return {
    name: NAMES[index],
    rating: randomNum([1, 2, 3, 4, 5]),
    region: REGIONS[randomNum(REGIONS)],
    favorite: Math.random() < 0.5,
    image: `http://placekitten.com/2${Math.floor(Math.random() * 90 + 10)}/2${Math.floor(Math.random() * 90 + 10)}`
  };
};

let allCats = [];

for (let i = 0; i < 45; i++) {
  allCats.push(generateKitten(i));
}

console.log(allCats);
