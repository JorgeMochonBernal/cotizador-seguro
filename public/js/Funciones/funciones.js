import { year, max,min,resultado, formulario } from './../Selectores/selectores.js';

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

          if(marca.value === '') {
            mostrarMensaje('Por favor escoja una marca');
          } else {
            const valorMarca = marca.value;
            const valorAño = year.value;
            const valorSeguro = document.querySelector('input[name="tipo"]:checked').value;

            calcularSeguro(valorMarca,valorAño,valorSeguro);
          }
        }

function mostrarMensaje(mensaje) {
    const mensajeError = document.querySelector('.bg-red-100');
    if(!mensajeError) {
        const mensajeError = document.createElement('div');
        mensajeError.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-20", "text-center" );
        mensajeError.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        resultado.appendChild(mensajeError);

        setTimeout(() => {
          mensajeError.remove();
        },3000);
      }
}

function calcularSeguro(marca,year,tipo) {
    let base = 2000;
    let cantidad;

    switch(marca) {
      case '1':
        cantidad = base * 1.15;
        break;
      case '2':
        cantidad = base * 1.05;
        break;
        case '3':
          cantidad = base * 1.35;
          break;
    }

    const diferencia = new Date().getUTCFullYear() - year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    if(tipo === 'basico') {
      cantidad = (cantidad * 0.30) + cantidad;
    } else {
      cantidad = (cantidad * 0.50) + cantidad;
    }

    mostrarResultado(marca,year,tipo,cantidad);
}

function mostrarResultado(marca,year,tipo,total) {
    switch(marca) {
         case '1':
              marca = 'Americano';
              break;
         case '2':
              marca = 'Asiatico';
              break;
         case '3':
              marca = 'Europeo';
              break;
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
         <p class='header'>Tu Resumen: </p>
         <p class="font-bold">Marca: <span class="font-normal"> ${marca} </span> </p>
         <p class="font-bold">Año: <span class="font-normal"> ${year} </span> </p>
         <p class="font-bold">Tipo: <span class="font-normal"> ${tipo} </span> </p>
         <p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>
    `;

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout( () =>  {
         spinner.style.display = 'none';
         resultado.appendChild(div);
    }, 3000);
}
