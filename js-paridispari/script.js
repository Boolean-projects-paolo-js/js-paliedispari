/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



let scelta = prompt ('scegli un numero pari o dispari');
console.log ('hai scelto: ' + scelta);

let sceltautente = parseInt(prompt ('scegli un numero'));
console.log ('numero scelto è: ' + sceltautente);

let sceltacomputer = (Math.floor(Math.random() * 5) + 1);
console.log (sceltacomputer);

let somma = sceltautente + sceltacomputer;
console.log (somma);

let confronto = controllo(somma);

function controllo (number) {
    if (number % 2 == 0) {
        return 'pari'
    }
    else {
        return 'dispari'
    }
}

if (scelta == confronto) {
    console.log('Hai vinto')
}
 else {
    console.log('Hai perso')
 }



