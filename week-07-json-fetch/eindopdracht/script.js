let allArticles = [];

const articlesContainer = document.querySelector("#articles");
const categoryButtons = document.querySelectorAll("#category-nav-button");

const showArticles = (articles) => {
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
  articlesContainer.innerHTML = "";
  const articleElements = articles.map((news) => {
    const { title, category, summary } = news;

    const article = document.createElement("article");
    article.classList.add("news-card");
    const heading = document.createElement("h2");
    heading.textContent = title;
    const categoryText = document.createElement("p");
    categoryText.classList.add("category");
    categoryText.textContent = category;
    const summaryText = document.createElement("p");
    summaryText.classList.add("summary");
    summaryText.textContent = summary;
    article.appendChild(heading);
    article.appendChild(categoryText);
    article.appendChild(summaryText);
    return article;
  });
  articleElements.forEach((article) => {
    articlesContainer.appendChild(article);
  });
};

fetch("./news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Bestand laden mislukt: ${response.status}`);
    }
    return response.json();
  })

  .then((articles) => {
    allArticles = articles;
    showArticles(allArticles);
    console.log("Nieuwsberichten geladen:", allArticles);
  })
  .catch((error) => {
    console.error("Fout bij laden:", error);
    articlesContainer.textContent =
      "Nieuwsberichten konden niet geladen worden";
  });

const setActiveButton = (selectedButton) => {
  categoryButtons.forEach((button) => {
    const isActive = button === selectedButton;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const filterAlle = document.querySelector("#filter-alle");
filterAlle.addEventListener("click", () => {
  showArticles(allArticles);
  setActiveButton(filterAlle);
});

const filterStad = document.querySelector("#filter-stad");

filterStad.addEventListener("click", () => {
  const stadArticles = allArticles.filter((article) => {
    return article.category === "Stad";
  });

  showArticles(stadArticles);

  setActiveButton(filterStad);
});

const filterTechnologie = document.querySelector("#filter-technologie");

filterTechnologie.addEventListener("click", () => {
  const technologieArticles = allArticles.filter((article) => {
    return article.category === "Technologie";
  });

  showArticles(technologieArticles);

  setActiveButton(filterTechnologie);
});

const filterMedia = document.querySelector("#filter-media");

filterMedia.addEventListener("click", () => {
  const mediaArticles = allArticles.filter((article) => {
    return article.category === "Media";
  });

  showArticles(mediaArticles);

  setActiveButton(filterMedia);
});

// Sla de artikelen op in allArticles
// Roep showArticles() aan met allArticles

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan
