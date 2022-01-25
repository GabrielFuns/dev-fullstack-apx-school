import { Piso } from "./piso";
import { Departamento } from "./departamento";

export class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  getPiso(nombreDePiso: string) {
    return this.pisos.find((item) => item.nombre === nombreDePiso);
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoSelected = this.getPiso(nombreDePiso);

    if (pisoSelected) {
      pisoSelected.pushDepartamento(departamento);
    } else {
      //throw "Error";
      console.log("Error no existe el piso");
    }
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoSelected = this.getPiso(nombreDePiso);

    return pisoSelected.getDepartamentos();
  }
}
