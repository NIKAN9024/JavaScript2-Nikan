const users = [
  {
    name: "Jan de Vries",
    email: "jan@bedrijf.nl",
    role: "admin",
    active: true,
  },
  { name: "Lisa Bakker", email: "lisa@bedrijf.nl", role: "user", active: true },
  { name: "Tom Visser", email: "tom@bedrijf.nl", role: "user", active: false },
  {
    name: "Sara Meijer",
    email: "sara@bedrijf.nl",
    role: "admin",
    active: true,
  },
];

let filter = "all";

const usersContainer = document.querySelector("#users");
const filterAllButton = document.querySelector("#filter-all");
const filterAdminButton = document.querySelector("#filter-admin");
const userForm = document.querySelector("#user-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const roleInput = document.querySelector("#role");

const showUsers = (users) => {
  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users

  usersContainer.innerHTML = "";
  if (users.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Geen gebruikers gevonden";
    usersContainer.appendChild(message);
    return;
  }
  users.forEach((user) => {
    const { name, email, role, active } = user;

    const article = document.createElement("article");
    article.classList.add("user-cart");

    const title = document.createElement("h3");
    title.textContent = name;

    const emailText = document.createElement("p");
    emailText.textContent = `Email: ${email}`;

    const roleText = document.createElement("p");
    if (role === "admin") {
      roleText.textContent = "Rol: Admin";
    } else {
      roleText.textContent = "Rol: Gebruiker";
    }
    const statusText = document.createElement("p");
    if (active === true) {
      statusText.textContent = "Status: Actief";
    } else {
      statusText.textContent = "Status: Inactief";
      article.classList.add("inactive");
    }
    article.appendChild(title);
    article.appendChild(emailText);
    article.appendChild(roleText);
    article.appendChild(statusText);

    usersContainer.appendChild(article);
  });
};

const filterUsers = () => {
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
  if (filter === "admin") {
    const admins = users.filter((user) => {
      return user.role === "admin";
    });
    showUsers(admins);
  } else {
    showUsers(users);
  }
};

filterAdminButton.addEventListener("click", () => {
  filter = "admin";
  filterUsers();
});

filterAllButton.addEventListener("click", () => {
  filter = "all";
  filterUsers();
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value;
  if (name === "" || email === "") {
    alert("vul een naam en e-mailadres in");
    return;
  }
  const defaultUser = {
    name: "",
    email: "",
    role: "user",
    active: true
  };
  const newUser = {
    ...defaultUser,
    name: name,
    email: email,
    role: role
  };

  users.push(newUser);
  filterUsers();
  userform.reset();
  console.log("Gebruikers:", users);
});


// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan

// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

filterUsers();