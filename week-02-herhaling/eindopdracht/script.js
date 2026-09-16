// Stap 1: Schrijf calculateTotal(bedrag, korting)
let amount = document.getElementById("amount");
let discount = document.getElementById('discount');
let button = document.getElementById('button');
let result = document.getElementById('result');

function calculateTotal(prijs, korting) {
    return prijs - (prijs * korting / 100);
}




// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
button.addEventListener("click", function (e) {
    e.preventDefault();
  result.textContent = calculateTotal(amount.value, discount.value);
});

// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is

// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij



