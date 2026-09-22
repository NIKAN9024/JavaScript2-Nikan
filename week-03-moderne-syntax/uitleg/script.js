let getName = document.getElementById('showName')


// function showName(name) {
//     return "Mijn naam is: " + name 
// }

const showName = (name) => {
    return `Mijn naam is:  ${name} `
}

getName.textContent = showName("Nikan")

let fruits = ['Appel', 'Banaan', 'Perzik'] 

// for (let i = 0; i < fruits.length; i ++) {
//     console.log(fruits[1])
// }

for (let fruit of fruits) {
    getName.innerHTML += fruit + "<br>";
}


