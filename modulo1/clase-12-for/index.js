const listaNumerosPares = [];
const listaNumerosImpares = [];
const listaNumeros = [];

while (listaNumeros.length < 87) {
  listaNumeros.push(Math.floor(Math.random() * (90 - 10) + 10));
}

for (var i = 0; i < listaNumeros.length; i++) {
  var element = listaNumeros[i];
  if (element % 2 == 0) {
    listaNumerosPares.push(element);
  } else {
    listaNumerosImpares.push(element);
  }
}

console.log("Cantidad numeros pares " + listaNumerosPares.length);
console.log("Cantidad numeros impares " + listaNumerosImpares.length);

console.log("Numeros pares");

console.table(listaNumerosPares);

console.log("Numeros impares");

console.table(listaNumerosImpares);
