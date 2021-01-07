import { year, max,min } from './../Selectores/selectores.js';

export function selectAños() {
  for(let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.textContent = i;
    option.value = i;

    year.appendChild(option);
  }
}

  export function cotizarSeguro(e) {
          e.preventDefault();
          console.log('SI');
  }
