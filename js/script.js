//Chiedi all’utente il suo nome, poi chiedi il suo cognome, 
//poi chiedi il suo colore preferito Infine scrivi sulla pagina 
//nomecognomecolorepreferito21

// Variabili
var nomeUtente = prompt ('Qual è il tuo nome?');
var cognomeUtente = prompt ('Qual è il tuo cognome?');
var colorePreferito = prompt ('Qual è il tuo colore preferito?');
var currentYear = '21';
var password

//console.log(nomeUtente);
//console.log(cognomeUtente);
//console.log(colorePreferito);

// Logica
password = nomeUtente + cognomeUtente + colorePreferito + currentYear;

document.getElementById('nome-utente').innerHTML = nomeUtente

document.getElementById('password').innerHTML = password;
