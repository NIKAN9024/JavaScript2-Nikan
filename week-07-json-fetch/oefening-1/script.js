fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  .then((books) => {
    const list = document.querySelector("#books-list");
    books.forEach((book) => {
      const li = document.createElement("li");
      const { title, author, year } = book;

      li.textContent = `${title} — ${author} (${year})`;
      list.appendChild(li);
    });

    console.log("Boeken geladen:", books);
  })

  .catch((error) => {
    console.error("Fout:", error);
  });
