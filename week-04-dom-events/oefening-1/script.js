// Voeg een event listener toe aan de knop
const input = document.querySelector("#input");
const addButton = document.querySelector("#add");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = text;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Verwijder";

  removeButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(removeButton);
  list.appendChild(listItem);

  input.value = "";
});
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
