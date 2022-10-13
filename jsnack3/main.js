/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* const number1 = prompt("Dammi un numero");
const number2 = prompt("Dammi un numero");
const number3 = prompt("Dammi un numero");
const number4 = prompt("Dammi un numero");
const number5 = prompt("Dammi un numero");
const number6 = prompt("Dammi un numero");
const number7 = prompt("Dammi un numero");
const number8 = prompt("Dammi un numero");
const number9 = prompt("Dammi un numero");
const number10 = prompt("Dammi un numero");

console.log(Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5) + Number(number6) + Number(number7) + Number(number8) + Number(number9) + Number(number10)); */


/* seconda versione con ciclo for */

/* let sum = 0
for (let i = 1; i <= 10; i++){
    let askNumber = Number(prompt("Dammi un numero"));
    sum += askNumber;  // --> sum = sum + askNumber
}

console.log(sum); */


/* terza versione con whiile */

let i = 0
let sum = 0
while (i < 10) {
    let askNumber = Number(prompt("Dammi un numero"));
    sum += askNumber;
    i++;
}

console.log(sum);