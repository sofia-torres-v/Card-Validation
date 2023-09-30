import validator from "./js/validator.js";

const tarjeta = document.querySelector("#tarjeta");
const menuIcon = document.querySelector(".menu-icon");
const elementosMenu = document.getElementById("menu");
const formulario = document.querySelector("#formulario-tarjeta");

const inputNumero = document.querySelector("#inputNumero");
const inputNombre = document.querySelector("#inputNombre");

const numeroTarjeta = document.querySelector(".numero");
const nombreTarjeta = document.querySelector(".nombre");
const texto = document.querySelector("#texto");
const texto2 = document.querySelector("#texto2");
const btn = document.querySelector("#btn-enviar");

const logoMarca = document.querySelector("#logo-marca");
const firma = document.querySelector("#tarjeta .firma p");

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

// * INPUT NUMERO TARJETA

formulario.inputNumero.addEventListener("blur", () => {
  const valorInput = formulario.inputNumero.value;

  if (valorInput === "") {
    inputNumero.style.border = "2px solid #b2b7be"; // Quitar borde rojo
    texto.innerHTML = ""; // Limpiar mensaje de error
  }
});

formulario.inputNombre.addEventListener("blur", () => {
  const valorInput = formulario.inputNombre.value;

  if (valorInput === "") {
    inputNombre.style.border = "2px solid #b2b7be"; // Quitar borde rojo
    texto.innerHTML = ""; // Limpiar mensaje de error
  }
});

formulario.inputNumero.addEventListener("input", () => {
  // const valorInput = e.target.value;
  const valorInput = formulario.inputNumero.value;
  formulario.inputNumero.value = valorInput
    .replace(/\s/g, "") // Eliminar espacios
    .replace(/\D/g, "") // Eliminar letras
    .replace(/([0-9]{4})/g, "$1 ") // Agregar espacios cada 4 digítos
    .trim();
  numeroTarjeta.textContent = valorInput;

  if (valorInput === "") {
    numeroTarjeta.textContent = "#### #### #### ####";
    logoMarca.innerHTML = "";
    inputNumero.style.border = "2px solid #b2b7be";
    texto.innerHTML = "";
  } else {
    inputNumero.style.border = "1px solid #52bd55"; // Establecer borde verde
    texto2.innerHTML = ""; // Limpiar mensaje de error
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
  mostrarFrente();
});

// Input nombre de tarjeta
formulario.inputNombre.addEventListener("input", () => {
  const valorInput = formulario.inputNombre.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput === "") {
    nombreTarjeta.textContent = "Sofia Torres";
    inputNombre.style.border = "2px solid #b2b7be";
    texto.innerHTML = "";
  }

  mostrarFrente();
});

btn.addEventListener("click", validate);
function validate() {
  const valorNumero = inputNumero.value;
  const valorNombre = inputNombre.value;

  const luhn = validator.isValid(valorNumero);

  if (valorNumero === "") {
    texto.innerHTML = " Este campo es obligatorio";
    inputNumero.style.border = "1px solid red";
  } else if (luhn) {
    texto.innerHTML = "Tarjeta válida";
    inputNumero.style.border = "1px solid #52bd55";
  } else {
    texto.innerHTML = " Error de validacion";
    inputNumero.style.border = "1px solid red";
  }
  // input nombre
  if (valorNombre === "") {
    texto2.innerHTML = "Este campo es obligatorio";
    inputNombre.style.border = "1px solid red";
  }
}

formulario.inputNombre.addEventListener("input", () => {
  const valorInput = formulario.inputNombre.value;

  if (valorInput === "") {
    inputNombre.style.border = "2px solid #b2b7be"; // Quitar borde rojo
    texto2.innerHTML = ""; // Limpiar mensaje de error
  } else {
    inputNombre.style.border = "1px solid #52bd55"; // Establecer borde verde
    texto2.innerHTML = ""; // Limpiar mensaje de error
  }
});
