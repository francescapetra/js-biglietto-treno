// quanti chilometri devo percorrere
var km = parseInt(prompt("Inserisci i kilometri da percorrere"));
console.log(km);
//
if (isNaN (km)) {
  km = parseInt(prompt("inserire un valore numerico"));
}


// quanti anni ha l'utente
var eta = parseInt(prompt("inserisci la tua età"));
console.log(eta);
// chilometri*0.21
var costo = km * 0.21;
document.getElementById('costo_biglietto').innerHTML = "Totale da pagare: " + "euro " + costo;
// nome passeggero
var nome = prompt( "inserisci il tuo nome");
document.getElementById('titolo').innerHTML = "Grazie " + nome + "," + " procedi al pagamento."
// condizioni

if ( eta <= 17 ) {
  costo = ((costo *80) / 100);
console.log (costo);
document.getElementById('costo_biglietto').innerHTML = "Sconto Under applicato. Totale da pagare: " + "euro " + costo;
document.getElementById('under').innerHTML = "Cartafreccia Under 20%";
document.getElementById('over').innerHTML = "";
}else if (eta >= 65){
  costo = ((costo *60) / 100);
console.log (costo);
document.getElementById('costo_biglietto').innerHTML = "Sconto Over applicato. Totale da pagare: " + "euro " + costo;
document.getElementById('over').innerHTML = "Cartafreccia Over 40%";
document.getElementById('under').innerHTML = "";
}

else if( (eta>=18) && (eta<= 64) ) {
console.log (costo);
document.getElementById('costo_biglietto').innerHTML = "Tariffa standard. Totale da pagare: " + "euro " + costo;
document.getElementById('over').innerHTML = "";
document.getElementById('under').innerHTML = "";
}
// solo else senza if e valori avrebbe funzionato lo9 stesso
