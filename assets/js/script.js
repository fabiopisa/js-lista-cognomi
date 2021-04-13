var lista_cognomi=[
  "Rossi",
  "Acquasanta",
  "Paolella",
  "Danielli",
  "Montone",
  "Capirossi",
  "Renzi",
  "Contini",
  "Roth",
  "Pausini",
  "Da Vinci"
];

var cognome_utente = prompt("Digita il tuo cognome");
lista_cognomi.push (cognome_utente);
lista_cognomi.sort();

for(var i=0; i<lista_cognomi.length; i++){
  var elemento_lista = lista_cognomi[i];
  var posizione_umana = i + 1;
  console.log(posizione_umana + " " + elemento_lista);

  var elemento_precedente = document.getElementById('lista').innerHTML;

  document.getElementById('lista').innerHTML = elemento_precedente + "<li>" + posizione_umana + ": è la posizione di " + elemento_lista + "</li>";
}

