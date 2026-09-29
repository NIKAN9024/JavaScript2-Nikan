let getName = document.getElementById("showName");

// function showName(name) {
//     return "Mijn naam is: " + name
// }

const showName = (name) => {
  return `Mijn naam is:  ${name} `;
};

getName.textContent = showName("Nikan");

let fruits = ["Appel", "Banaan", "Perzik"];

// for (let i = 0; i < fruits.length; i ++) {
//     console.log(fruits[1])
// }

for (let fruit of fruits) {
  getName.innerHTML += fruit + "<br>";
}

let title = document.getElementById("title");
let button = document.getElementById("button");
let section = document.getElementById("section");

button.addEventListener("click", () => {
  title.textContent = "Ik heb geklikt!";

    title.classList.toggle("active");
    

    const p = document.createElement("p");

    p.textContent = "Ik voeg een paragraaf toe";


    section.appendChild(p);
});
