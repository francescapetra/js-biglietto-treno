// quanti chilometri devo percorrere
var km = parseInt(prompt("Inserisci i kilometri da percorrere"));
console.log(km);
// quanti anni ha l'utente
var eta = parseInt(prompt("inserisci la tua età"));
console.log(eta);
// chilometri*0.21
var costo = km * 0.21;
document.getElementById('costo_biglietto').innerHTML = "Totale da pagare: " + "euro " + costo;
// condizioni
