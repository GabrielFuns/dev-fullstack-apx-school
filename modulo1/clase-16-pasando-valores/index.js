function numeroRandom(max) {
  return Math.floor(Math.random() * max);
}

function generarArrayObjetos() {
  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const resultado = [];

  while (resultado.length < 20) {
    resultado.push({
      char: letras[numeroRandom(letras.length)],
      numero: numeroRandom(100),
    });
  }
  return resultado;
}

function obtenerPares(lista) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.numero % 2 == 0) {
      resultado.push(element);
    }
  }
  return resultado;
}

function main() {
  const listaObjetos = generarArrayObjetos();
  const listaPares = obtenerPares(listaObjetos);

  console.table(listaPares);
}

main();
