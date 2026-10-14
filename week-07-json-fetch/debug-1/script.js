// Fout gevonden: _______________
// Oplossing: _______________
fetch("./news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Bestand laden mislukt: ${response.status}`);
    }
    return response.json();
  })
  .then((messages) => {
    const list = document.querySelector("#results");
    messages.forEach((message) => {
      const li = document.createElement("li");
      li.textContent = message.title;
      list.appendChild(li);
    });
    console.log("Nieuwsberichten succesvol geladen");
  })

  .catch((error) => {
    console.error("Fout:", error);
    const list = document.querySelector("#results");
    list.textContent = "Nieuwsberichten kunnen niet geladen worden";
  });
