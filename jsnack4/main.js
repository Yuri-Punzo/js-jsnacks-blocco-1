/* Snack 4 Blocco 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */



const whoAreYou = prompt("Come ti chiami ?")
const vipsList = ["pincopanco",
    "pancopinco",
    "pincopallino",
    "johndoe",
    "janedoe"];

let inOrOut = "sei fuori..."

let i = 0;
while (i < vipsList.length) {
    if (whoAreYou === vipsList[i]) {
        inOrOut = "sei dentro !"
    }
    i++
}

console.log(inOrOut);
document.getElementById("in_or_out").innerHTML = inOrOut;
