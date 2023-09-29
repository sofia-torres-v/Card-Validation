// import validator from "../js/validator.js";

const tarjeta = document.querySelector("#tarjeta");
const menuIcon = document.querySelector(".menu-icon");
const elementosMenu = document.getElementById("menu");
const formulario = document.querySelector("#formulario-tarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const logoMarca = document.querySelector("#logo-marca");
const firma = document.querySelector('#tarjeta .firma p');

// * Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
  if (tarjeta.classList.contains("active")) {
    tarjeta.classList.remove("active");
  }
};

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

// Select del mes y año generado dinámicamnete
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.selectMes.appendChild(opcion);
}

const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerHTML = i;
  formulario.selectYear.appendChild(opcion);
}

// Input número de la tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
  const valorInput = e.target.value;

  // Elimina espacios en blanco/letras/agregarmos espacios cada 4 digítos
  formulario.inputNumero.value = valorInput
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput === "") {
    numeroTarjeta.textContent = "#### #### #### ####";
    logoMarca.innerHTML = "";
  }

  if (valorInput[0] === "4") {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] === "5") {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/masterc.png";
    logoMarca.appendChild(imagen);
  }

  // Volteamos la tarjeta para que el usuario vea el frente
  mostrarFrente();
});

// Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup',(e) =>{
  const valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;
  
  if (valorInput === '') {
    nombreTarjeta.textContent = 'Sofia Torres'
  }

  mostrarFrente();
})
