/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let parola = prompt("inserire una parola");



function equivalenza (word) {

    let cword = "";

    for (i = word.length - 1; i >= 0; i--) {
      cword += word[i]
    }

    if(word == cword) {
        console.log('Palindroma');
    }

    else {
        console.log(' Non è palindroma');
    }
}

equivalenza (parola);




