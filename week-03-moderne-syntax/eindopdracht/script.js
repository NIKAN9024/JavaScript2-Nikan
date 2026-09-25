// Stap 1: Selecteer het formulier en de profielenlijst
let form = document.getElementById("profile-form");
let formList = document.getElementById("profiles-list");
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let role = document.getElementById("role").value.trim();
  let department = document.getElementById("department").value.trim();

  // Voeg geen profiel toe als een veld leeg is
  if (name === "" || role === "" || department === "") {
    alert("Vul alle velden in.");
    return;
  }

  formList.innerHTML += `
    <div class="profile-card">
      <h3>${name}</h3>
      <p>Functie: ${role}</p>
      <p>Afdeling: ${department}</p>
      <button type="button" class="remove-button">Verwijderen</button>
    </div>
  `;

  form.reset(); //maak de invoer velden weer leeg
});

// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart
formList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.closest(".profile-card").remove();
  }
});
