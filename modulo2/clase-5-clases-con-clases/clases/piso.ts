import { Departamento } from "./departamento";

export class Piso {
  nombre: string;
  departamentos: Array<Departamento> = [];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }
  getDepartamentos() {
    return this.departamentos;
  }
}
