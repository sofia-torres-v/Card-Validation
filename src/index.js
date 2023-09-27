// import validator from "../js/validator.js";

const tarjeta = document.querySelector('#tarjeta');
const menuIcon = document.querySelector('.menu-icon');
const elementosMenu = document.getElementById('menu');

tarjeta.addEventListener('click', () =>{
  tarjeta.classList.toggle('active');
 
});

menuIcon.addEventListener('click', showMenu);

// function showMenu() {
//   if (elementosMenu.classList.contains('active')) {
//     elementosMenu.classList.remove('active')
//   } else {
//     elementosMenu.classList.add('active')
//   }
// }


// Si tiene o no  la clase aparece y desaparece 
function showMenu() {
  elementosMenu.classList.toggle('active')
}



