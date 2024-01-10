// STEP 1: dichiaro le variabili che mi servono:
//- il tipo di offerta applicata e
//- il prezzo del biglietto

//- Nome e cognome dell'utente,
const UserNameSurname = document.getElementById("name-surname").value;
console.log("Username: " + UserNameSurname);

//- il numero di chilometri che vuole eseguire,
const lenghtInKm = parseInt(document.getElementById("travel-lenght").value);
console.log("Km: " + lenghtInKm);

//- età,
const age = document.getElementById("age").value;
console.log("Fascia d'età: " + age);

//- il bottone "Calcola",
const calcButton = document.getElementById("calc-button");
console.log("Calcolo in corso...");

// STEP 2: calcolo il prezzo del biglietto in base ai km percorsi
const lenghtPrize = lenghtInKm * 0.21;
console.log("Il prezzo sulla base dei km è: " + lenghtPrize);

// STEP 3: calcolo il prezzo sulla base dell'età dell'utente
let finalPrize = 0;
let finalPrizeFixed = 0;

if (age == "Ridotto minorenni") {
  finalPrize = lenghtPrize * 0.8;
  finalPrizeFixed = finalPrize.toFixed(2);
  console.log("Il prezzo viene scontato a: " + finalPrizeFixed);
} else if (age == "Ridotto over65") {
  finalPrize = lenghtPrize * 0.6;
  finalPrizeFixed = finalPrize.toFixed(2);
  console.log("Il prezzo viene scontato a: " + finalPrizeFixed);
} else {
  finalPrize = lenghtPrize;
  finalPrizeFixed = finalPrize.toFixed(2);
  console.log("Il prezzo rimane invariato a: " + finalPrizeFixed);
}

// STEP 4: stampo il prezzo finale del biglietto
console.log("Il prezzo finale è di: " + finalPrizeFixed);
document.getElementById("final-prize").innerText = finalPrizeFixed;

// STEP 5: creo il biglietto del treno
document.getElementById("user").innerText = UserNameSurname;
document.getElementById("discount").innerText = age;
document.getElementById("final-prize-ticket").innerText = finalPrizeFixed;

//BONUS: faccio in modo che cliccando sul bottone "Calcola" appaia il biglietto
calcButton.addEventListener("click", function () {});
