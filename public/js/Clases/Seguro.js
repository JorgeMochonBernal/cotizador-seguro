import { selectAños,cotizarSeguro } from '../Funciones/funciones.js';
import { formulario } from './../Selectores/selectores.js';

class Seguro {
  constructor() {
    this.event();
  }

  event() {
    document.addEventListener('DOMContentLoaded', selectAños);
    formulario.addEventListener('submit', cotizarSeguro);
  }
}

export default Seguro;
