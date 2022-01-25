const array = [
  { id: 1, nombre: "producto 1", stock: 300 },
  { id: 2, nombre: "producto 2", stock: 3 },
  { id: 3, nombre: "producto 3", stock: 30 },
  { id: 4, nombre: "producto 4", stock: 3000 },
  { id: 5, nombre: "producto 5", stock: 33 },
];

exports.getOne = (id) => {
  return array.find((item) => item.id == id);
};

exports.getAll = () => {
  return array;
};

exports.getAllWith = (minStock) => {
  return array.filter((item) => item.stock >= minStock);
};
