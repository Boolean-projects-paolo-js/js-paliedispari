/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

let word

function equivalenza (word, cword) {

    for (let i = 0; i < 1; i++) {
        word = prompt("inserire una parola");
        cword = prompt('inserire parola al contrario')
    
    
        if(word == cword) {
            console.log('Palindroma');
        }
    
        else {
            console.log(' Non è palindroma');
        }
    }
}


