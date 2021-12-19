let parolaInserita = prompt("Inserisci una parola");

function palindroma() {
  let arrayparola = parolaInserita.toLowerCase().split("");
  let half = Math.floor(arrayparola.length / 2);
  for (i = 0, i2 = arrayparola.length - 1; i < half; i++, i2--) {
    if (arrayparola[i] != arrayparola[i2]) {
      return "non è palindroma!";
    }
    else {
      return "è palindroma!";
    }
  } 
}

document.writeln("Parola inserita: " + parolaInserita);
document.writeln(palindroma());