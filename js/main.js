const nomeUtente = prompt ("inserisci nome" , "3manu3l3");
const cognome = prompt ("inserisci cognome" , "Guerra");
const colore = prompt ("qual è il tuo colore preferito?" , "Nero");

document .getElementById("nome").innerHTML = "Benvenuto, " + nomeUtente
document .getElementById("passcode").innerHTML = "Questa è la tua Password: " + nomeUtente + cognome + colore + "#23"