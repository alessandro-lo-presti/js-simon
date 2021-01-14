// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var arrayRandom = [];
var numeroRandom;

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

// aspetta 30 secondi ed esegue la funzione indovina
setTimeout(indovina, 1000, arrayRandom);


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

  // stampa risultati
  console.log("Punteggio: " + risposteCorrette.length);
  console.log("Hai indovinato questi numeri: " + risposteCorrette);
}
