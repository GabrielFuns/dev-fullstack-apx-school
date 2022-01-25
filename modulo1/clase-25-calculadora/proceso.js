const operacion = require("./operaciones");

const regex = /[+\-\/\*]/;
const mapa = {
  "+": operacion.sumar,
  "-": operacion.restar,
  "*": operacion.multiplicar,
  "/": operacion.dividir,
};

const obtenerTerminos = (item) => {
  const terminos = item.split(regex);
  const indexOperador = item.search(regex);
  const operador = item.substr(indexOperador, 1);
  return {
    primerTermino: Number(terminos[0]),
    segundoTermino: Number(terminos[1]),
    operador: operador,
  };
};

exports.parcearTerminos = (array) => {
  return array
    .filter((item) => !item.includes(":\\"))
    .map((item) => {
      return obtenerTerminos(item);
    });
};

exports.ejecutarOperacion = (objetoOperacion) => {
  const ejecutor = mapa[objetoOperacion.operador];
  return ejecutor(
    objetoOperacion.primerTermino,
    objetoOperacion.segundoTermino
  );
};
