var counter = 0;
var lista = [];

while (counter < 130) {
  var obj = { random: Math.floor(Math.random() * 200) };
  lista[counter] = obj;
  counter++;
}

console.table(lista);
