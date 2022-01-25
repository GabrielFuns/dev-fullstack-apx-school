const listaNumeros = [];

while (listaNumeros.length < 39) {
  listaNumeros.push(Math.floor(Math.random() * (100 - 10) + 10));
}

function OrdenamientoBurbuja(lista) {
  var bloqueados = 0;
  var otraVueltaMas;

  do {
    otraVueltaMas = false;
    for (let index = 0; index < lista.length - bloqueados; index++) {
      var primerElemento = lista[index];
      var segundoElemento = lista[index + 1];

      if (primerElemento > segundoElemento) {
        lista[index] = segundoElemento;
        lista[index + 1] = primerElemento;
        otraVueltaMas = true;
      }
    }
    bloqueados++;
  } while (otraVueltaMas);

  return lista;
}

const listaNumerosOrdenados = OrdenamientoBurbuja(listaNumeros);

console.log(listaNumerosOrdenados);
