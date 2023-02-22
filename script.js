

// Nuovo File JS

// INIZIO ESERCIZIO
//_________________________________________________________________________________

/*

Prima parte esercizio
- Chiedere all'utente il numero di kilometri che vuole percorrere
- Chiedere all'utente l'età del passeggero
- Memorizzarle sulla console

*/


/*

Seconda parte dell'esercizio
- Applicare lo sconto del 20% per i minorenni
- Applicare lo sconto del 40% per gli over 65
- Indicare il prezzo scontato e non in pagina

*/

let kilometriUser = prompt("Inserisci il numero di km che dovrai percorrere");
console.log(kilometriUser);


let etàUser = prompt("Inserisci la tua età");
console.log(etàUser);

let prezzoBiglietto = parseFloat(kilometriUser) * 0.21;

if (etàUser < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
}
else if (etàUser > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}

document.writeln("Il prezzo del biglietto è: " + prezzoBiglietto.toFixed(2));