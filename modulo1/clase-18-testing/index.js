// Escribir acá la función cuentaPalabras

function cuentaPalabras(texto) {
  var arrayPalabras = texto.split(" ");
  var contador = 0;

  for (let i = 0; i < arrayPalabras.length; i++) {
    const element = arrayPalabras[i];
    if (element[0] === "a") {
      contador++;
    }
  }

  return {
    cantidadDePalabras: arrayPalabras.length,
    palabrasConA: contador,
  };
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
}

main();
