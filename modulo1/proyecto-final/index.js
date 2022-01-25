const pelis = require("./pelis");

function main() {
  const argumentosProcesados = pelis.procesarArgumentos(process.argv);

  if (argumentosProcesados.JsonFormat) {
    console.log(JSON.stringify(argumentosProcesados.resultado));
  } else {
    console.table(argumentosProcesados.resultado);
  }
}

main();
