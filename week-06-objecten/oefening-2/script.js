const people = [
  { name: "Lisa", age: 28, city: "Amsterdam" },
  { name: "Mark", age: 34, city: "Rotterdam" },
  { name: "Sara", age: 22, city: "Utrecht" },
];

// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
const origineel = document.querySelector("#origineel");
const kopie = document.querySelector("#kopie");

const origineleLijst = people.map(({ name, city }) => {
  return `${name} woont in ${city}.`;
});

// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
origineleLijst.forEach((persoon) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = persoon;
  origineel.appendChild(paragraph);
});

const nieuwePeople = people.map((person) => {
  return {
    ...person,
    city: "Den Haag",
  };
});

// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
const aangepasteLijst = nieuwePeople.map(({ name, city }) => {
  return `${name} woont in ${city}.`;
});

aangepasteLijst.forEach((persoon) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = persoon;
  kopie.appendChild(paragraph);
});

console.log("orginele personen:", people);
console.log("aangepaste personen:", nieuwePeople);
console.log("");
