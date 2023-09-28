// import validator from "../js/validator.js";

const tarjeta = document.querySelector("#tarjeta");
const menuIcon = document.querySelector(".menu-icon");
const elementosMenu = document.getElementById("menu");
const formulario = document.querySelector("#formulario-tarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
// const nombreTarjeta = document.querySelector("#tarjeta .nombre");
// Rotación de la tarjeta
tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

// Menú hamburguesa
menuIcon.addEventListener("click", showMenu);
function showMenu() {
  // Si tiene o no  la clase aparece y desaparece
  elementosMenu.classList.toggle("active");
}

// Select del mes generado dinámicamnete
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.selectMes.appendChild(opcion);
}

// Select del año generado dinámicamnete
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.selectYear.appendChild(opcion);
}

// Capturando el valo del input numero de tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
  const valorInput = e.target.value;

  // Eliminamos espacios en blanco/letras/colocamos espacios cada 4 digítos
  formulario.inputNumero.value = valorInput
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput === "") {
    numeroTarjeta.textContent = "#### #### #### ####";
  }
});
