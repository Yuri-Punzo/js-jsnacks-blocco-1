/* Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = prompt("Dammi un numero");

const secondNumber = prompt("Dammi un altro numero");

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (firstNumber < secondNumber) {
    console.log(secondNumber);
}