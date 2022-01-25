const productos = require("./products");

function main() {
  const gAll = productos.getAll();
  console.log("GenAll ", gAll);

  const gOne = productos.getOne(3);
  console.log("GetOne ", gOne);

  const gAllWith = productos.getAllWith(300);
  console.log("GetAllWith ", gAllWith);
}

main();
