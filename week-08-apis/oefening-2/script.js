// ============================================================
// OEFENING 2 - POKÉMON ZOEKEN
// ============================================================
//
// Onderwerpen:
//
// 1. API-gegevens ophalen met fetch()
// 2. JSON verwerken
// 3. Arrays gebruiken
// 4. .map() gebruiken
// 5. Spread operator gebruiken
// 6. HTML-elementen maken
// 7. Pokémon-afbeeldingen tonen
// 8. .filter() gebruiken
// 9. Eventlisteners gebruiken
//
// ============================================================

// ============================================================
// 1. LEGE ARRAY MAKEN
// ============================================================

// Hierin bewaren we straks alle 151 Pokémon.
//
// In het begin is de array leeg,
// omdat de API nog geen gegevens heeft teruggestuurd.

let allPokemon = [];

// ============================================================
// 2. HTML-ELEMENTEN SELECTEREN
// ============================================================

// Zoek de section waarin de Pokémon moeten verschijnen.
//
// Het # betekent dat we zoeken naar een ID.

const pokemonList = document.querySelector("#pokemon-list");

// Zoek de zoekbalk in de HTML.

const searchBar = document.querySelector("#search-bar");

// Zoek de paragraaf waarin het aantal Pokémon komt.

const counter = document.querySelector("#counter");

// ============================================================
// 3. FUNCTIE: showPokemon()
// ============================================================

// Deze functie ontvangt een array met Pokémon.
//
// Bijvoorbeeld:
// showPokemon(allPokemon);
//
// We gebruiken deze functie om Pokémon
// op de pagina te tonen.

const showPokemon = (pokemonArray) => {
  // ========================================================
  // 4. OUDE POKÉMON VERWIJDEREN
  // ========================================================

  // Maak de section eerst leeg.
  //
  // Dit is belangrijk wanneer iemand zoekt.
  //
  // Anders zouden de Pokémon steeds
  // opnieuw worden toegevoegd.

  pokemonList.innerHTML = "";

  // ========================================================
  // 5. TELLER BIJWERKEN
  // ========================================================

  // .length geeft aan hoeveel Pokémon
  // er in de meegegeven array staan.

  counter.textContent = `${pokemonArray.length} Pokémon gevonden.`;

  // ========================================================
  // 6. CONTROLEREN OF DE LIJST LEEG IS
  // ========================================================

  // Als er geen Pokémon gevonden zijn,
  // tonen we een melding op de pagina.

  if (pokemonArray.length === 0) {
    const message = document.createElement("p");

    message.textContent = "Geen Pokémon gevonden.";

    pokemonList.appendChild(message);

    // Stop de functie hier.
    return;
  }

  // ========================================================
  // 7. DOOR DE POKÉMON LOPEN
  // ========================================================

  // forEach() loopt door alle Pokémon.
  //
  // pokemon is telkens één Pokémon-object.

  pokemonArray.forEach((pokemon) => {
    // ====================================================
    // 8. ARTICLE MAKEN
    // ====================================================

    // Maak een nieuw article-element.
    //
    // Ieder karakter krijgt een eigen article.

    const article = document.createElement("article");

    // ====================================================
    // 9. NAAM MAKEN
    // ====================================================

    // Maak een h2-element voor de Pokémon-naam.

    const name = document.createElement("h2");

    // Zet de Pokémon-naam in de h2.
    //
    // Bijvoorbeeld:
    // bulbasaur

    name.textContent = pokemon.name;

    // ====================================================
    // 10. AFBEELDING MAKEN
    // ====================================================

    // Maak een nieuw img-element.

    const image = document.createElement("img");

    // ====================================================
    // 11. AFBEELDINGSLINK INSTELLEN
    // ====================================================

    // School heeft ons een afbeeldingslink gegeven.
    //
    // De afbeelding verandert per Pokémon.
    //
    // We gebruiken pokemon.id om
    // de juiste afbeelding op te halen.

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    // ====================================================
    // 12. ALT-TEKST INSTELLEN
    // ====================================================

    // alt geeft een beschrijving van de afbeelding.
    //
    // Dit is belangrijk voor toegankelijkheid.

    image.alt = `Afbeelding van ${pokemon.name}`;

    // ====================================================
    // 13. ELEMENTEN AAN ARTICLE TOEVOEGEN
    // ====================================================

    // Voeg de naam toe aan het article.

    article.appendChild(name);

    // Voeg de afbeelding toe aan het article.

    article.appendChild(image);

    // ====================================================
    // 14. ARTICLE OP DE WEBSITE TONEN
    // ====================================================

    // Voeg de complete Pokémon-kaart toe
    // aan de section met id="pokemon-list".

    pokemonList.appendChild(article);
  });
};

// ============================================================
// 15. FUNCTIE: filterPokemon()
// ============================================================

// Deze functie gaat de Pokémon filteren.
//
// Hij leest de zoektekst en kijkt
// welke Pokémon overeenkomen.

const filterPokemon = () => {
  // ========================================================
  // 16. ZOEKTEKST UITLEZEN
  // ========================================================

  // .value haalt de tekst uit het zoekveld.
  //
  // .toLowerCase() maakt alle letters klein.
  //
  // .trim() verwijdert onnodige spaties
  // aan het begin en einde.

  const searchText = searchBar.value.toLowerCase().trim();

  // ========================================================
  // 17. POKÉMON FILTEREN
  // ========================================================

  // filter() maakt een nieuwe array
  // met alleen passende Pokémon.
  //
  // includes() controleert of de naam
  // de ingevulde zoektekst bevat.

  const filteredPokemon = allPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchText);
  });

  // ========================================================
  // 18. GEFILTERDE POKÉMON TONEN
  // ========================================================

  // Toon alleen de passende Pokémon.
  //
  // Deze functie werkt meteen
  // de teller op de pagina bij.

  showPokemon(filteredPokemon);
};

// ============================================================
// 19. API-GEGEVENS OPHALEN
// ============================================================

// fetch() vraagt de eerste 151 Pokémon op.
//
// De API geeft een object terug
// met daarin een results-array.

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  // ========================================================
  // 20. JSON OMZETTEN NAAR JAVASCRIPT
  // ========================================================

  // De server stuurt JSON terug.
  //
  // response.json() leest de JSON-inhoud
  // en zet die om naar JavaScript-gegevens.

  .then((response) => response.json())

  // ========================================================
  // 21. GEGEVENS VAN DE API ONTVANGEN
  // ========================================================

  .then((data) => {
    // ====================================================
    // 22. STRUCTUUR BEKIJKEN
    // ====================================================

    // Bekijk de API-gegevens in de Developer Console.
    //
    // Dit heeft school ook gevraagd.

    console.log(data);

    // ====================================================
    // 23. POKÉMON OPSLAAN MET .map()
    // ====================================================

    // data.results is de array met Pokémon.
    //
    // Met .map() maken we een nieuwe array.
    //
    // ...pokemon kopieert het bestaande object.
    //
    // id: index + 1 voegt het nummer toe.
    //
    // Bijvoorbeeld:
    //
    // Eerste Pokémon: id = 1
    // Tweede Pokémon: id = 2
    // Derde Pokémon: id = 3

    allPokemon = data.results.map((pokemon, index) => {
      return {
        ...pokemon,

        id: index + 1,
      };
    });

    // ====================================================
    // 24. CONTROLEREN IN DE CONSOLE
    // ====================================================

    // Bekijk alle Pokémon met hun nieuwe ID.

    console.log("Alle Pokémon:", allPokemon);

    // ====================================================
    // 25. ALLE POKÉMON TONEN
    // ====================================================

    // filterPokemon() controleert de zoektekst.
    //
    // Als de zoekbalk leeg is,
    // worden alle 151 Pokémon getoond.
    //
    // Zo blijft zoeken ook correct werken
    // als iemand al iets typt tijdens het laden.

    filterPokemon();
  })

  // ========================================================
  // 26. FOUTEN OPVANGEN
  // ========================================================

  // Als de API niet bereikbaar is
  // of er een andere fout ontstaat,
  // verschijnt een melding in de Console.

  .catch((error) => {
    console.error("Fout:", error);

    // Toon een melding op de pagina.
    counter.textContent = "Pokémon konden niet geladen worden.";
  });

// ============================================================
// 27. EVENTLISTENER VOOR DE ZOEKBALK
// ============================================================

// We willen direct zoeken wanneer iemand typt.
//
// Daarom gebruiken we het input-event.
//
// Dit werkt bij iedere verandering van het invoerveld.

searchBar.addEventListener("input", () => {
  // ========================================================
  // 28. POKÉMON FILTEREN
  // ========================================================

  // Voer de zoekfunctie uit.
  //
  // Deze functie leest zelf de zoektekst,
  // filtert de array en werkt de lijst bij.

  filterPokemon();
});

// ============================================================
// EINDE VAN DE SCHOOLVOPDRACHT
// ============================================================
