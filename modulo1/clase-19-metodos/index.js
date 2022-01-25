// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función textosCortos y pasar el test.
function textosCortos(arrayTextos) {
  const resultado = [];

  for (let i = 0; i < arrayTextos.length; i++) {
    const element = arrayTextos[i];

    //Verifico que la cantidad de palablas sea menor o igual a 10
    if (element.texto.split(" ").length <= 10) {
      //Quito espacios al inicio y al final
      var titulo = element.titulo.trim();
      //Reemplazo la primer letra por mayuscula
      titulo = titulo.replace(
        titulo.substring(0, 1),
        titulo.substring(0, 1).toUpperCase()
      );

      element.titulo = titulo;
      resultado.push(element);
    }
  }
  return resultado;
}

// test: no modificar
function testTextosCortos() {
  const textosDePrueba = [
    {
      titulo: " un titulo ",
      texto: "uno dos tres cuatro cinco",
    },
    {
      titulo: "what ever",
      texto: "uno dos tres cuatro cinco seis siete ocho nueve diez once",
    },
  ];
  const respuesta = textosCortos(textosDePrueba);

  if (respuesta.length == 1 && respuesta[0].titulo == "Un titulo") {
    console.log("testTextosCortos passed");
  } else {
    throw "testTextosCortos failed";
  }
}

function main() {
  testTextosCortos();
}

main();
