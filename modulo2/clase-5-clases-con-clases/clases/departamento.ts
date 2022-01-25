export class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}
