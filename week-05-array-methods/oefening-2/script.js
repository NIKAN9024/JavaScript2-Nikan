// Lijst met alle namen
const names = [
  "Anna",
  "Bob",
  "Charlotte",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henk",
  "Isabel",
  "Jan",
  "Karen",
  "Lars",
];

// ============================================================
// SECTIE 1
// Zoek eerste naam die begint met een letter
// ============================================================

// Zoek het invoerveld
const searchFind = document.querySelector("#search-find");

// Zoek waar het resultaat moet komen
const outputFind = document.querySelector("#output-find");

// Luister naar een toets
searchFind.addEventListener("keydown", (event) => {
  // Alleen doorgaan als Enter wordt ingedrukt
  if (event.key === "Enter") {
    // Pak de invoer, haal spaties weg
    // en maak alles kleine letters
    const letter = searchFind.value.trim().toLowerCase();

    // Als het veld leeg is
    if (letter === "") {
      outputFind.textContent = "Vul eerst een letter in.";

      // Stop hier
      return;
    }

    // Zoek de eerste naam die begint
    // met de ingevoerde letter
    const gevondenNaam = names.find((name) => {
      return name.toLowerCase().startsWith(letter);
    });

    // Als er een naam gevonden is
    if (gevondenNaam) {
      outputFind.textContent = gevondenNaam;
    } else {
      // Als er niets gevonden is
      outputFind.textContent = "Geen naam gevonden";
    }

    // Maak het invoerveld weer leeg
    searchFind.value = "";
  }
});

// ============================================================
// SECTIE 2
// Controleer of een naam in de lijst staat
// ============================================================

// Zoek het tweede invoerveld
const searchIncludes = document.querySelector("#search-includes");

// Zoek waar true of false moet komen
const outputIncludes = document.querySelector("#output-includes");

// Luister naar een toets
searchIncludes.addEventListener("keydown", (event) => {
  // Alleen doorgaan als Enter wordt ingedrukt
  if (event.key === "Enter") {
    // Pak de ingevoerde naam
    // en maak hem kleine letters
    const zoekNaam = searchIncludes.value.trim().toLowerCase();

    // Controleer of het veld leeg is
    if (zoekNaam === "") {
      outputIncludes.textContent = "Vul eerst een naam in.";

      return;
    }

    // Maak alle namen uit de lijst kleine letters
    const kleineLettersNamen = names.map((name) => {
      return name.toLowerCase();
    });

    // Controleer of de naam in de lijst staat
    // Uitkomst wordt true of false
    const naamBestaat = kleineLettersNamen.includes(zoekNaam);

    // Toon true of false op de pagina
    outputIncludes.textContent = naamBestaat;

    // Maak het invoerveld weer leeg
    searchIncludes.value = "";
  }
});
