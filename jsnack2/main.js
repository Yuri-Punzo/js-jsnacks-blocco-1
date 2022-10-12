/* Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivi un'altra parola");

let longerWord;
let shorterWord;
let equalWord

if (firstWord.length > secondWord.length) {
    console.log(firstWord , secondWord );
    longerWord = firstWord;
    shorterWord = secondWord;
} else if (firstWord.length < secondWord.length) {
    console.log(secondWord , firstWord);
    longerWord = secondWord;
    shorterWord = firstWord;
} else {
    console.log(firstWord , secondWord , "else")
    equalWord = true;    
}

document.getElementById("longer_word").innerHTML = `${longerWord} parola più lunga, ${shorterWord} parola più corta`;

if (equalWord) {
    document.getElementById("longer_word").innerHTML = `${firstWord} , ${secondWord} eguale lunghezza`;
}