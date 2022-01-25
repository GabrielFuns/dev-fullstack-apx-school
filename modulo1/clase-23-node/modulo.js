exports.crearArrayObjetos = (array) => {
  return array
    .reduceRight((acumulador, valorActual, indice, arr) => {
      if (!Array.isArray(acumulador)) acumulador = [];
      return valorActual.startsWith("--")
        ? [...acumulador, { [valorActual.slice(2)]: arr[indice + 1] }]
        : acumulador;
    })
    .reverse();
};
