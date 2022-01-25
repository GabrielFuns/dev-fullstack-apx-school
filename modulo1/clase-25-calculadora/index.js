const proceso = require("./proceso");

function main() {
  const terminos = proceso.parcearTerminos(process.argv);
  const resultado = proceso.ejecutarOperacion(terminos[0]);
  console.log(resultado);
}

main();
