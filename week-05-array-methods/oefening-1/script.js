// ============================================================
// OEFENING 1 - SCORES VERWERKEN
// ============================================================

// We hebben een array met verschillende scores.
//
// Een array is een lijst met meerdere waarden.
//
// In dit geval zijn het allemaal getallen.
const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// ============================================================
// FILTER
// Toon alleen scores boven de 50 in #result-filtered
// ============================================================

// filter() loopt door alle waarden in de array.
//
// Bij iedere waarde controleert JavaScript:
// moet deze waarde blijven of niet?
//
// score is telkens één getal uit de array.
//
// Bijvoorbeeld:
//
// score = 12
// score = 67
// score = 45
//
// return score > 50;
//
// betekent:
//
// geef true terug als score groter is dan 50.
//
// Alleen de scores waarbij het antwoord true is,
// worden in de nieuwe array gezet.
const voldoendeScores = scores.filter((score) => {
  // Controleer of de huidige score groter is dan 50.
  return score > 50;
});

// document.querySelector() zoekt een element in de HTML.
//
// #result-filtered betekent:
//
// zoek het element met:
//
// id="result-filtered"
//
// In onze HTML is dit:
//
// <ul id="result-filtered"></ul>
const filteredList = document.querySelector("#result-filtered");

// forEach() loopt door ieder item in een array.
//
// Hier loopt hij dus door alle scores
// die boven de 50 zijn.
voldoendeScores.forEach((score) => {
  // document.createElement("li")
  // maakt een nieuw HTML <li> element.
  //
  // Op dit moment bestaat het element alleen nog
  // in JavaScript.
  const listItem = document.createElement("li");

  // textContent zet tekst in het nieuwe <li> element.
  //
  // Bijvoorbeeld:
  //
  // als score 67 is:
  //
  // <li>67</li>
  listItem.textContent = score;

  // appendChild() voegt het nieuwe <li> element
  // toe aan onze <ul>.
  //
  // Dus uiteindelijk ontstaat bijvoorbeeld:
  //
  // <ul id="result-filtered">
  //     <li>67</li>
  //     <li>89</li>
  // </ul>
  filteredList.appendChild(listItem);
});

// ============================================================
// MAP
// Verdubbel alle scores en toon in #result-map
// ============================================================

// map() loopt ook door alle waarden van een array.
//
// Het verschil met filter():
//
// filter()
// kiest welke waarden mogen blijven.
//
// map()
// verandert iedere waarde.
//
// Hier wordt iedere score vermenigvuldigd met 2.
const dubbeleScores = scores.map((score) => {
  // Bijvoorbeeld:
  //
  // 12 * 2 = 24
  //
  // 67 * 2 = 134
  //
  // 45 * 2 = 90
  return score * 2;
});

// Zoek in de HTML naar:
//
// <ul id="result-map"></ul>
const mapList = document.querySelector("#result-map");

// Loop door iedere verdubbelde score.
dubbeleScores.forEach((score) => {
  // Maak een nieuw <li> element.
  const listItem = document.createElement("li");

  // Zet de huidige score in de <li>.
  listItem.textContent = score;

  // Voeg de <li> toe aan #result-map.
  mapList.appendChild(listItem);
});

// ============================================================
// SORT
// Sorteer van laag naar hoog en toon in #result-sorted
// ============================================================

// [...scores]
//
// maakt eerst een kopie van de originele scores-array.
//
// Dit heet de spread syntax.
//
// De drie puntjes:
//
// ...
//
// betekenen hier:
//
// pak alle waarden uit scores
// en zet ze in een nieuwe array.
//
// Waarom doen we dit?
//
// sort() kan de originele array veranderen.
//
// Door eerst een kopie te maken,
// blijft de originele scores-array hetzelfde.
const gesorteerdeScores = [...scores].sort((a, b) => {
  // sort() vergelijkt telkens twee waarden.
  //
  // a = eerste waarde
  // b = tweede waarde
  //
  // a - b zorgt ervoor dat de getallen
  // van laag naar hoog worden gesorteerd.
  //
  // Bijvoorbeeld:
  //
  // 12, 16, 23, 38, 45, 55...
  return a - b;
});

// Zoek in de HTML naar:
//
// <ul id="result-sorted"></ul>
const sortedList = document.querySelector("#result-sorted");

// Loop door iedere gesorteerde score.
gesorteerdeScores.forEach((score) => {
  // Maak een nieuw <li> element.
  const listItem = document.createElement("li");

  // Zet de score in het <li> element.
  listItem.textContent = score;

  // Voeg het nieuwe <li> element toe aan
  // de lijst #result-sorted.
  sortedList.appendChild(listItem);
});
