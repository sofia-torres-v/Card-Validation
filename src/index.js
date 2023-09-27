// import validator from "../js/validator.js";

const tarjeta = document.querySelector('#tarjeta');
const menuIcon = document.querySelector('.menu-icon');
const elementosMenu = document.getElementById('menu');
const formulario = document.querySelector('#formulario-tarjeta');

// Rotación de la tarjeta
tarjeta.addEventListener('click', () =>{
  tarjeta.classList.toggle('active');
});


// Menú hamburguesa
menuIcon.addEventListener('click', showMenu);
function showMenu() {
  // Si tiene o no  la clase aparece y desaparece 
  elementosMenu.classList.toggle('active')
}


// Select del mes generado dinamicamnete
for (let i = 1; i <= 12; i++){
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.selectMes.appendChild(opcion)

}





