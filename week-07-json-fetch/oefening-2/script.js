fetch("./movies.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Bestand laden mislukt: ${response.status}`);
    }
    return response.json();
  })
  .then((movies) => {
    const filmsSection = document.querySelector("#films");

    filmsSection.innerHTML = "";

    movies.forEach((movie) => {
      const { title, director, year, genre } = movie;

      const article = document.createElement("article");

      const heading = document.createElement("h2");

      heading.textContent = title;

      const directorText = document.createElement("p");

      directorText.textContent = `Regisseur: ${director}`;

      const yearText = document.createElement("p");

      yearText.textContent = `Jaar: ${year}`;

      const genreText = document.createElement("p");

      genreText.textContent = `Genre: ${genre}`;

      article.appendChild(heading);

      article.appendChild(directorText);

      article.appendChild(yearText);

      article.appendChild(genreText);

      filmsSection.appendChild(article);
    });

    console.log("Films geladen:", movies);
  })

  .catch((error) => {
    console.error("Fout:", error);

    const filmsSection = document.querySelector("#films");

    filmsSection.textContent = "Films konden niet geladen worden.";
  });
