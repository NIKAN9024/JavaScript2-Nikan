let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('btn');

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let output1 = document.getElementById('output1');
let output2 = document.getElementById("output2");






buttonCalc.addEventListener('click', function () {
    outputCalc.textContent = calculator(input1.value, input2.value,);


})

//maak BUITEN het event een function genaamd calculator
//in de functie zorg je er voor dat a en b vermenigvuldigt wordt

function calculator(a, b) {
    return a * b;
}




console.log(input)
//zorg dat je op de button kan kliken met console.log testen of het werkt

button.addEventListener('click', function () {
    console.log('Geklikt')
    // moet de achtergrond van de button groen wordt

    button.style.backgroundColor = 'green';

    // toon de input op het scherm op de plek van de output
    output.textContent = input.value;


    //toon de input op het scherm op de plek van de output
    output.style.color = 'green';

    //maak de input leeg
    input.value = '';
})
