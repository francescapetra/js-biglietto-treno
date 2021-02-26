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
if ( eta <= 17 ) {
  costo = ((costo *100) / 120);
console.log (costo);
document.getElementById('costo_biglietto').innerHTML = "Sconto Under applicato. Totale da pagare: " + "euro " + costo;
document.getElementById('under').innerHTML = "Tariffa Under sconto 20%";
document.getElementById('over').innerHTML = "";
}else if (eta >= 65){
  costo = ((costo *100) / 140);
console.log (costo);
document.getElementById('costo_biglietto').innerHTML = "Sconto Over applicato. Totale da pagare: " + "euro " + costo;
document.getElementById('over').innerHTML = "Tariffa Over sconto 40%";
document.getElementById('under').innerHTML = "";
}
// // else (eta >18 < 65){
// console.log (costo);
// document.getElementById('costo_biglietto').innerHTML = "Tariffa standard. Totale da pagare: " + "euro " + costo;
// document.getElementById('over').innerHTML = "";
// document.getElementById('under').innerHTML = "";
// }
