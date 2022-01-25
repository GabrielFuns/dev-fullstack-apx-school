const fs = require("fs");

const getData = () => {
  const data = fs.readFileSync("datos.json");
  return JSON.parse(data.toString());
};

exports.getAll = () => {
  return getData();
};

exports.getOlderThan = (edad) => {
  return getData().filter((item) => item.edad > edad);
};
