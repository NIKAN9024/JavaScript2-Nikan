// Zoek in de HTML naar het formulier met id="task-form"
// We slaan dat HTML-element op in de variabele 'form'
const form = document.querySelector("#task-form");

// Zoek het invoerveld met id="task-input"
// Hier typt de gebruiker een nieuwe taak
const input = document.querySelector("#task-input");

// Zoek de <ul> met id="tasks"
// In deze lijst komen straks alle taken te staan
const tasks = document.querySelector("#tasks");

// Zoek het element met id="counter"
// Hier laten we zien hoeveel taken er zijn
const counter = document.querySelector("#counter");

// --------------------------------------------------
// FUNCTIE: taakToevoegen
// --------------------------------------------------

// Dit is een arrow function
// De functie krijgt 'tekst' mee als parameter
// Bijvoorbeeld: taakToevoegen("Huiswerk maken")
const taakToevoegen = (tekst) => {
  // Maak met JavaScript een nieuw <li> element
  // Een <li> is één item in een lijst
  const listItem = document.createElement("li");

  // Maak een nieuw <input> element
  const checkbox = document.createElement("input");

  // Geef het input-element het type "checkbox"
  // Daardoor wordt het een aankruisvakje
  checkbox.type = "checkbox";

  // Maak een nieuw <span> element
  // In deze span komt de tekst van de taak te staan
  const taskText = document.createElement("span");

  // Zet de tekst die aan de functie is meegegeven
  // in het <span> element
  //
  // Bijvoorbeeld:
  // tekst = "Huiswerk maken"
  //
  // Dan wordt de span:
  // <span>Huiswerk maken</span>
  taskText.textContent = tekst;

  // Maak een nieuwe knop
  const deleteButton = document.createElement("button");

  // Zet tekst in de knop
  deleteButton.textContent = "verwijderen";

  // Voeg de class "delete-button" toe aan de knop
  //
  // De knop wordt hierdoor ongeveer:
  // <button class="delete-button">verwijderen</button>
  //
  // Deze class gebruiken we later om te controleren
  // of er op een verwijderknop is geklikt
  deleteButton.classList.add("delete-button");

  // Voeg de checkbox toe aan het <li> element
  listItem.appendChild(checkbox);

  // Voeg daarna de tekst van de taak toe
  listItem.appendChild(taskText);

  // Voeg daarna de verwijderknop toe
  listItem.appendChild(deleteButton);

  // Het <li> element ziet er nu ongeveer zo uit:
  //
  // <li>
  //   <input type="checkbox">
  //   <span>Huiswerk maken</span>
  //   <button class="delete-button">verwijderen</button>
  // </li>

  // Voeg het complete <li> element toe aan de <ul id="tasks">
  // Daardoor wordt de taak zichtbaar op de website
  tasks.appendChild(listItem);

  // Roep de functie toonTaken() aan
  // Hiermee wordt de teller bijgewerkt
  toonTaken();
};

// --------------------------------------------------
// FUNCTIE: toonTaken
// --------------------------------------------------

// Deze functie telt hoeveel <li> elementen er in de takenlijst staan
const toonTaken = () => {
  // Zoek ALLE <li> elementen binnen de takenlijst
  //
  // querySelectorAll("li") geeft een verzameling terug
  //
  // .length vertelt hoeveel elementen erin zitten
  //
  // Bijvoorbeeld:
  //
  // 3 <li> elementen
  // betekent:
  // aantalTaken = 3
  const aantalTaken = tasks.querySelectorAll("li").length;

  // Controleer of er precies 1 taak is
  if (aantalTaken === 1) {
    // Bij precies één taak schrijven we:
    // "1 taak"
    //
    // Niet "1 taken"
    counter.textContent = "1 taak";
  } else {
    // Als er 0, 2, 3, 4 enzovoort taken zijn,
    // gebruiken we een template literal
    //
    // ${aantalTaken} wordt vervangen door het aantal
    //
    // Bijvoorbeeld:
    // aantalTaken = 3
    //
    // Resultaat:
    // "3 taken"
    counter.textContent = `${aantalTaken} taken`;
  }
};

// --------------------------------------------------
// FORMULIER VERSTUREN
// --------------------------------------------------

// Luister naar het "submit" event van het formulier
//
// Dit gebeurt bijvoorbeeld wanneer:
// - op de knop "Voeg toe" wordt geklikt
// - de gebruiker op Enter drukt in het formulier
form.addEventListener("submit", (event) => {
  // Een formulier probeert normaal de pagina opnieuw te laden
  //
  // preventDefault() voorkomt dat standaardgedrag
  //
  // Hierdoor kunnen wij het formulier zelf met JavaScript verwerken
  event.preventDefault();

  // Pak de tekst uit het invoerveld
  //
  // input.value = wat de gebruiker heeft getypt
  //
  // .trim() verwijdert spaties aan het begin en einde
  //
  // Bijvoorbeeld:
  //
  // "    Huiswerk maken    "
  //
  // wordt:
  //
  // "Huiswerk maken"
  const tekst = input.value.trim();

  // Controleer of de gebruiker niets heeft ingevuld
  //
  // "" betekent een lege string
  if (tekst === "") {
    // return stopt de functie meteen
    //
    // Daardoor wordt er geen lege taak toegevoegd
    return;
  }

  // Roep de functie taakToevoegen() aan
  //
  // We geven de ingevoerde tekst mee
  //
  // Bijvoorbeeld:
  //
  // taakToevoegen("Huiswerk maken")
  taakToevoegen(tekst);

  // Maak het invoerveld daarna weer leeg
  //
  // Hierdoor kan de gebruiker meteen een nieuwe taak typen
  input.value = "";
});

// --------------------------------------------------
// VERWIJDERKNOP
// --------------------------------------------------

// Luister naar klik-events binnen de hele takenlijst
//
// We zetten dus niet op iedere knop apart een listener
//
// We luisteren op de <ul id="tasks">
// en kijken daarna WAAR er precies geklikt is
tasks.addEventListener("click", (event) => {
  // event.target betekent:
  //
  // "Het element waarop daadwerkelijk geklikt is"
  //
  // classList.contains("delete-button") controleert:
  //
  // Heeft het aangeklikte element de class "delete-button"?
  if (event.target.classList.contains("delete-button")) {
    // event.target is hier de verwijderknop
    //
    // parentElement betekent:
    // pak het bovenliggende element
    //
    // De button zit binnen een <li>
    //
    // Dus:
    //
    // button
    //   ↓
    // parentElement
    //   ↓
    // <li>
    //
    // .remove() verwijdert dat <li> element
    event.target.parentElement.remove();

    // Nadat een taak verwijderd is,
    // moet de teller opnieuw worden berekend
    toonTaken();
  }
});

// --------------------------------------------------
// CHECKBOX
// --------------------------------------------------

// Luister naar veranderingen binnen de takenlijst
//
// Het "change" event wordt bijvoorbeeld uitgevoerd
// wanneer een checkbox wordt aan- of uitgevinkt
tasks.addEventListener("change", (event) => {
  // Controleer of het gewijzigde element
  // een checkbox is
  if (event.target.type === "checkbox") {
    // event.target is hier de checkbox
    //
    // parentElement is het <li> element
    // waarin de checkbox staat
    //
    // classList.toggle() kan een class
    // toevoegen of verwijderen
    //
    // De class heet hier "completed"
    event.target.parentElement.classList.toggle(
      "completed",

      // event.target.checked is:
      //
      // true  = checkbox is aangevinkt
      // false = checkbox is niet aangevinkt
      //
      // Als checked true is:
      // voeg "completed" toe
      //
      // Als checked false is:
      // verwijder "completed"
      event.target.checked,
    );
  }
});
