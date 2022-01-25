// 🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️🏴‍☠️
// Completar acá.
// Escribir la función soloObjetosConNombreYApellido()
// y pasar el test.
function soloObjetosConNombreYApellido(array) {
  return array.filter(function (item) {
    var keys = Object.keys(item);
    if (keys.includes("nombre") && keys.includes("apellido")) {
      return item;
    }
  });
}

// Escribir la función soloLosNombres()
// y pasar el test.
function soloLosNombres(array) {
  return array.map(function (item) {
    return item.nombre.replace(/^\w/, (c) => c.toUpperCase());
  });
}

// Tests. No modificar!
function testSoloObjetosConNombreYApellido() {
  const datosDePrueba = [
    { a: 1 },
    { nombre: true },
    { nombre: "Paula", apellido: "Gil" },
    { nombre: "Marce", apellido: "Zapaia" },
  ];
  const respuesta = soloObjetosConNombreYApellido(datosDePrueba);
  const hasPau = respuesta.find((r) => r.nombre == "Paula");
  const hasMarce = respuesta.find((r) => r.nombre == "Marce");

  if (respuesta.length == 2 && hasMarce && hasPau) {
    console.log("testSoloObjetosConNombreYApellido passed");
  } else {
    throw "testSoloObjetosConNombreYApellido failed";
  }
}

function testSoloLosNombres() {
  const datosDePrueba = [{ nombre: "paula" }, { nombre: "dana" }];

  const respuesta = soloLosNombres(datosDePrueba);

  if (respuesta.includes("Paula") && respuesta.includes("Dana")) {
    console.log("testSoloLosNombres passed");
  } else {
    throw "testSoloLosNombres failed";
  }
}

function main() {
  testSoloObjetosConNombreYApellido();
  testSoloLosNombres();
}

main();
