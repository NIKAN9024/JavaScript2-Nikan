// ============================================================
// OEFENING 1 - API VERKENNEN
// ============================================================

// Haal de gegevens op van de Rick and Morty API.
fetch("https://rickandmortyapi.com/api/character")
  // Zet het antwoord van de API om naar JavaScript-gegevens.
  .then((r) => r.json())

  // data bevat nu alle informatie van de API.
  .then((data) => {
    // Bekijk de gegevens in de Developer Console.
    console.log(data);

    // ========================================================
    // 1. HTML-SECTION SELECTEREN
    // ========================================================

    // Zoek de section met id="characters".
    const characters = document.querySelector("#characters");

    // ========================================================
    // 2. DOOR ALLE KARAKTERS LOPEN
    // ========================================================

    // De karakters staan in data.results.
    // forEach() loopt door ieder karakter.

    data.results.forEach((character) => {
      // ======================================================
      // 3. ARTICLE AANMAKEN
      // ======================================================

      // Maak voor ieder karakter een nieuw article.
      const article = document.createElement("article");

      // ======================================================
      // 4. NAAM AANMAKEN
      // ======================================================

      // Maak een h2 voor de naam.
      const name = document.createElement("h2");

      // Haal de naam op uit het karakterobject.
      name.textContent = character.name;

      // ======================================================
      // 5. AFBEELDING AANMAKEN
      // ======================================================

      // Maak een img-element.
      const image = document.createElement("img");

      // Haal de afbeelding op uit het karakterobject.
      image.src = character.image;

      // Beschrijf de afbeelding.
      image.alt = character.name;

      // ======================================================
      // 6. ELEMENTEN AAN ARTICLE TOEVOEGEN
      // ======================================================

      // Voeg de naam toe aan het article.
      article.appendChild(name);

      // Voeg de afbeelding toe aan het article.
      article.appendChild(image);

      // ======================================================
      // 7. ARTICLE AAN DE WEBSITE TOEVOEGEN
      // ======================================================

      // Zet het article in de section #characters.
      characters.appendChild(article);
    });
  })

  // Toon een foutmelding in de Console als er iets misgaat.
  .catch((error) => console.error("Fout:", error));
