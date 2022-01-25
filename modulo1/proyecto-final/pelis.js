const fs = require("fs");

//Obtener datos
const getData = () => {
  const data = fs.readFileSync(__dirname + "/pelis.json");
  return JSON.parse(data);
};

//Filtrar por tag
const tag = (array, value) => {
  return array.filter((item) => item.tags.includes(value.toLowerCase()));
};

//Filtrar por title
const search = (array, value) => {
  return array.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
};

//Ordenar por la propiedad indicada
const sort = (array, propName) => {
  return array.sort((a, b) => {
    if (a[propName] < b[propName]) return -1;
    if (a[propName] > b[propName]) return 1;
    return 0;
  });
};

//Obtener argumentos y valores
const obtenerArgumentos = (array) => {
  return array.reduce((acumulador, valorActual, indice, arr) => {
    if (!Array.isArray(acumulador)) acumulador = [];
    return valorActual.startsWith("--")
      ? [...acumulador, { [valorActual.slice(2)]: arr[indice + 1] }]
      : acumulador;
  });
};

exports.procesarArgumentos = (array) => {
  const argumentos = obtenerArgumentos(array);
  const mapa = {
    sort: sort,
    tag: tag,
    search: search,
  };
  var jsonFormat = false;
  var listaPelis = getData();

  argumentos.forEach((element) => {
    const nombrePropiedad = Object.getOwnPropertyNames(element);

    if (nombrePropiedad != "no-format") {
      const ejecutor = mapa[nombrePropiedad];
      listaPelis = ejecutor(listaPelis, element[nombrePropiedad]);
    } else {
      jsonFormat = true;
    }
  });

  return {
    resultado: listaPelis,
    JsonFormat: jsonFormat,
  };
};
