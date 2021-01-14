// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var arrayRandom = [];
var numeroRandom;
var t = 5;

// ciclo che riempie arrayRandom con numeri casuali
while(arrayRandom.length < 5) {
  numeroRandom = Math.floor(Math.random() * 100) + 1;

  // controllo per evitare che i numeri si ripetano
  if(!arrayRandom.includes(numeroRandom)) {
    arrayRandom.push(numeroRandom);
  }
}

// alert che mostra i numeri da indovinare
alert(arrayRandom);

// timer
var timer = setInterval(function() {
  var risultato;

  if(t == 0) {
    document.getElementById("timer").innerHTML = "Game";
    clearInterval(timer);
    risultato = indovina(arrayRandom);
    document.getElementById("timer").innerHTML = "End";
    document.getElementById("score").innerHTML = "Punteggio: " + risultato.length;
    document.getElementById("numbers").innerHTML = "Indovinati: " + risultato;
  }
  else {
    document.getElementById("timer").innerHTML = t--;
  }
}, 1000);


// funzioni
function indovina(numeriNascosti) {
  var risposteCorrette = [];
  var numeroScelto;

  // ciclo per prendere le risposte dell'utente
  for(var i = 0; i < numeriNascosti.length; i++) {
      numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 100"));

      // controllo che verifica se una risposta è corretta e che non sia stata già data
      if(numeriNascosti.includes(numeroScelto) && !risposteCorrette.includes(numeroScelto)) {
        risposteCorrette.push(numeroScelto);
      }
  }

  return risposteCorrette;
}
