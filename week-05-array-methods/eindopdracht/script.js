const products = [
  { name: "Laptop Pro", category: "Electronics", price: 1299, stock: true },
  { name: "Draadloze muis ", category: "Electronics", price: 29, stock: true },
  { name: "USB-C hub", category: "Electronics", price: 49, stock: false },
  { name: "Bureaulamp", category: "Kantoor", price: 35, stock: true },
  { name: "Notitieboek", category: "Kantoor", price: 8, stock: true },
  { name: "Pennenset", category: "Kantoor", price: 12, stock: false },
  { name: "Koptelefoon", category: "Audio", price: 59, stock: true },
  { name: "Webcam HD", category: "Electronics", price: 79, stock: false },
  { name: "Muismat XL", category: "Kantoor", price: 19, stock: true },
  { name: "Monitor 27", category: "Electronics", price: 349, stock: true },
  { name: "Desk organizer", category: "Kantoor", price: 24, stock: true },
];

let searchTerm = "";
let sorting = "";

const showProducts = (productsToShow) => {
  // Toon elk product als een <article> in #products
  const productsContainer = document.querySelector("#products");

  // Laat in #counter de hoeveelheid producten zien
  const counter = document.querySelector("#counter");

  productsContainer.innerHTML = "";

  productsToShow.forEach((product) => {
    const article = document.createElement("article");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Prijs: €${product.price}`;

    article.appendChild(title);
    article.appendChild(price);

    productsContainer.appendChild(article);
  });

  counter.textContent = `${productsToShow.length} producten`;
};

const filterProducts = () => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  // Gebruik hiervoor filter() en includes() en toLowerCase()
  let filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Filter hier op sorting:
  // als sorting 'low' is, sorteer van laag naar hoog op prijs
  if (sorting === "low") {
    filtered.sort((a, b) => {
      return a.price - b.price;
    });
  }

  // als sorting 'high' is, sorteer van hoog naar laag op prijs
  if (sorting === "high") {
    filtered.sort((a, b) => {
      return b.price - a.price;
    });
  }

  showProducts(filtered);
};

// Maak een eventlistener voor de #search-bar input
const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", () => {
  // Sla de waarde op in de searchTerm variabele en roep filterProducts() aan
  searchTerm = searchBar.value;

  filterProducts();
});

// Maak een eventlistener voor de #sort-low button
const sortLowButton = document.querySelector("#sort-low");

sortLowButton.addEventListener("click", () => {
  // Zet sorting op 'low' en roep filterProducts() aan
  sorting = "low";

  filterProducts();
});

// Maak een eventlistener voor de #sort-high button
const sortHighButton = document.querySelector("#sort-high");

sortHighButton.addEventListener("click", () => {
  // Zet sorting op 'high' en roep filterProducts() aan
  sorting = "high";

  filterProducts();
});

filterProducts();
