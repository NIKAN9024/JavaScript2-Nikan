// ============================================================
// WEEK 8 - EINDOPDRACHT
// WEERAPPLICATIE
// ============================================================

// API_KEY wordt geladen vanuit config.js.
//
// De HTML laadt eerst config.js
// en daarna pas script.js.

// ============================================================
// 1. FUNCTIE: showWeather(data)
// ============================================================

// Deze functie ontvangt de weergegevens
// die OpenWeatherMap heeft teruggestuurd.
//
// data is een JavaScript-object.
//
// Bijvoorbeeld:
//
// data.name              = Stadsnaam
// data.main.temp         = Temperatuur
// data.main.feels_like   = Gevoelstemperatuur
// data.main.humidity     = Luchtvochtigheid
// data.wind.speed        = Windsnelheid
// data.weather[0].icon   = Weericoon

const showWeather = (data) => {
  // Bekijk het volledige object in de Console.
  console.log("Weergegevens:", data);

  // ========================================================
  // 2. HTML-SECTION SELECTEREN
  // ========================================================

  // Zoek de section met id="weather-info".

  const weatherInfo = document.querySelector("#weather-info");

  // ========================================================
  // 3. VORIGE WEERGEGEVENS VERWIJDEREN
  // ========================================================

  // Maak de section leeg.
  //
  // Hierdoor verdwijnen de gegevens
  // van de vorige stad.

  weatherInfo.innerHTML = "";

  // ========================================================
  // 4. ARTICLE AANMAKEN
  // ========================================================

  // Maak één article voor de weerkaart.

  const article = document.createElement("article");

  // ========================================================
  // 5. STADSNAAM MAKEN
  // ========================================================

  // Maak een h2-element.

  const cityName = document.createElement("h2");

  // Haal de naam van de stad op uit de API.

  cityName.textContent = data.name;

  // Voeg de stadsnaam toe aan de kaart.

  article.appendChild(cityName);

  // ========================================================
  // 6. WEERICOON MAKEN
  // ========================================================

  // Maak een img-element.

  const weatherIcon = document.createElement("img");

  // Haal de icooncode uit de API.
  //
  // data.weather is een array.
  // [0] betekent het eerste object.

  const iconCode = data.weather[0].icon;

  // Maak de afbeeldingslink.
  //
  // Dit is het URL-patroon
  // dat school heeft gegeven.

  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Voeg een beschrijving toe voor toegankelijkheid.

  weatherIcon.alt = data.weather[0].description || "Weericoon";

  // Voeg het icoon toe aan het article.

  article.appendChild(weatherIcon);

  // ========================================================
  // 7. TEMPERATUUR OPHALEN EN AFRONDEN
  // ========================================================

  // Math.round() rondt een getal af.
  //
  // Bijvoorbeeld:
  // 18.7 wordt 19
  // 18.2 wordt 18

  const temperature = Math.round(data.main.temp);

  // ========================================================
  // 8. GEVOELSTEMPERATUUR AFRONDEN
  // ========================================================

  const feelsLike = Math.round(data.main.feels_like);

  // ========================================================
  // 9. LUCHTVOCHTIGHEID OPHALEN
  // ========================================================

  // De API geeft luchtvochtigheid in procenten.

  const humidity = data.main.humidity;

  // ========================================================
  // 10. WINDSNELHEID OPHALEN
  // ========================================================

  // Bij units=metric is dit meter per seconde.

  const windSpeed = data.wind.speed;

  // ========================================================
  // 11. FUNCTIE: addWeatherRow()
  // ========================================================

  // We maken een kleine functie
  // om een regel met weerinformatie te maken.
  //
  // Een regel bevat:
  //
  // <p>
  //   <span>Temperatuur</span>
  //   <span>19°C</span>
  // </p>
  //
  // Dit past bij de bestaande CSS van school.

  const addWeatherRow = (label, value) => {
    // Maak een nieuw p-element.

    const row = document.createElement("p");

    // Maak een span voor het label.

    const labelSpan = document.createElement("span");

    // Zet de naam in het span-element.

    labelSpan.textContent = label;

    // Maak een span voor de waarde.

    const valueSpan = document.createElement("span");

    // Zet de waarde in het tweede span-element.

    valueSpan.textContent = value;

    // Voeg beide spans toe aan de paragraaf.

    row.appendChild(labelSpan);

    row.appendChild(valueSpan);

    // Voeg de hele regel toe aan de weerkaart.

    article.appendChild(row);
  };

  // ========================================================
  // 12. TEMPERATUUR TONEN
  // ========================================================

  addWeatherRow("Temperatuur", `${temperature}°C`);

  // ========================================================
  // 13. GEVOELSTEMPERATUUR TONEN
  // ========================================================

  addWeatherRow("Gevoelstemperatuur", `${feelsLike}°C`);

  // ========================================================
  // 14. LUCHTVOCHTIGHEID TONEN
  // ========================================================

  addWeatherRow("Luchtvochtigheid", `${humidity}%`);

  // ========================================================
  // 15. WINDSNELHEID TONEN
  // ========================================================

  addWeatherRow("Windsnelheid", `${windSpeed} m/s`);

  // ========================================================
  // 16. WEERKAART TONEN
  // ========================================================

  // Voeg het volledige article toe
  // aan de section #weather-info.

  weatherInfo.appendChild(article);
};

// ============================================================
// 17. FUNCTIE: getWeather(city)
// ============================================================

// Deze functie haalt de weergegevens op.
//
// city is een parameter.
// Bijvoorbeeld: "Amsterdam".

const getWeather = (city) => {
  // ========================================================
  // 18. HTML-SECTION SELECTEREN
  // ========================================================

  const weatherInfo = document.querySelector("#weather-info");

  // ========================================================
  // 19. LAADMELDING TONEN
  // ========================================================

  // Verwijder de vorige inhoud.

  weatherInfo.innerHTML = "";

  // Maak een paragraaf met een laadmelding.

  const loadingMessage = document.createElement("p");

  loadingMessage.textContent = "Weergegevens worden geladen...";

  // Voeg de melding toe aan de website.

  weatherInfo.appendChild(loadingMessage);

  // ========================================================
  // 20. API-URL MAKEN
  // ========================================================

  // Dit is de URL die school heeft gegeven.
  //
  // q = stadsnaam
  // appid = onze API-key
  // units=metric = Celsius en meter per seconde
  //
  // encodeURIComponent() zorgt dat een stadsnaam
  // veilig in de URL wordt geplaatst.

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  // ========================================================
  // 21. API AANROEPEN
  // ========================================================

  // fetch() verstuurt de aanvraag.

  fetch(url)
    // ====================================================
    // 22. RESPONSE CONTROLEREN
    // ====================================================

    .then((response) => {
      // Controleer of de stad bestaat.

      if (response.status === 404) {
        throw new Error("Stad niet gevonden. Probeer opnieuw.");
      }

      // Controleer de API-key.

      if (response.status === 401) {
        throw new Error("API-key ongeldig of nog niet geactiveerd.");
      }

      // Controleer andere HTTP-fouten.

      if (!response.ok) {
        throw new Error(`API-fout: ${response.status}`);
      }

      // Zet JSON om naar JavaScript-gegevens.

      return response.json();
    })

    // ====================================================
    // 23. WEERGEGEVENS ONTVANGEN
    // ====================================================

    .then((data) => {
      // Bekijk de gegevens in de Console.

      console.log("API-response:", data);

      // Toon de weergegevens op de website.

      showWeather(data);
    })

    // ====================================================
    // 24. FOUTEN OPVANGEN
    // ====================================================

    .catch((error) => {
      // Toon de fout in Developer Tools.

      console.error("Fout:", error);

      // Verwijder de laadmelding.

      weatherInfo.innerHTML = "";

      // Maak een foutmelding.

      const errorMessage = document.createElement("p");

      // Geef de foutmelding tekst.

      errorMessage.textContent = error.message;

      // Toon de fout op de website.

      weatherInfo.appendChild(errorMessage);
    });
};

// ============================================================
// 25. FORMULIER SELECTEREN
// ============================================================

// Zoek het formulier met id="search-form".

const searchForm = document.querySelector("#search-form");

// Zoek het invoerveld met id="city-input".

const cityInput = document.querySelector("#city-input");

// ============================================================
// 26. EVENTLISTENER VOOR HET FORMULIER
// ============================================================

// Dit gebeurt wanneer de gebruiker
// op de knop "Zoek" klikt
// of op Enter drukt.

searchForm.addEventListener("submit", (e) => {
  // ========================================================
  // 27. PAGINA NIET HERLADEN
  // ========================================================

  // Voorkom dat het formulier
  // de pagina opnieuw laadt.

  e.preventDefault();

  // ========================================================
  // 28. STADSNAAM UITLEZEN
  // ========================================================

  // .value haalt de ingevoerde tekst op.
  //
  // .trim() verwijdert onnodige spaties.

  const city = cityInput.value.trim();

  // ========================================================
  // 29. CONTROLEREN OF HET VELD LEEG IS
  // ========================================================

  // Als er geen stad is ingevuld,
  // stoppen we deze functie.

  if (city === "") {
    return;
  }

  // ========================================================
  // 30. WEERGEGEVENS OPHALEN
  // ========================================================

  // Roep de getWeather-functie aan
  // met de ingevoerde stadsnaam.

  getWeather(city);

  // ========================================================
  // 31. INVOERVELD LEEGMAKEN
  // ========================================================

  // Maak het zoekveld leeg.

  cityInput.value = "";
});

// ============================================================
// EINDE VAN DE WEEK 8 EINDOPDRACHT
// ============================================================
