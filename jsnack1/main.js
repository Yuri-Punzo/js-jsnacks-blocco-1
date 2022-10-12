/* Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = prompt("Dammi un numero");

const secondNumber = prompt("Dammi un altro numero");

let higherNumber
if (firstNumber > secondNumber) {
    console.log(firstNumber);
    higherNumber = firstNumber
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
    higherNumber = secondNumber
}

document.getElementById("higher_number").innerHTML = higherNumber