const title = document.getElementById("title");
const button = document.getElementById("btn");
const section = document.getElementById("section");

let aantalKlikken = 0;

let name = "Nikan";
let opleiding = "front-end developer";

const berekenPunten = () => {
  return aantalKlikken * 10;
};

console.log(berekenPunten(3));

button.addEventListener("click", () => {
  aantalKlikken++;

  title.textContent = `Hoi, ik ben ${name} en ik doe de opleiding ${opleiding}`;
  title.classList.toggle("active");

  const p = document.createElement("p");
  p.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten(aantalKlikken)} punten `;
  section.appendChild(p);
});
