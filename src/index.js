import validator from "./js/validator.js";

const tarjeta = document.querySelector("#tarjeta");
const menuIcon = document.querySelector(".menu-icon");
const elementosMenu = document.getElementById("menu");
const formulario = document.querySelector("#formulario-tarjeta");
const inputNumero = document.querySelector("#inputNumero");
// const inputNombre = document.querySelector('#inputNombre');

const numeroTarjeta = document.querySelector(".numero");
const nombreTarjeta = document.querySelector(".nombre");
const texto = document.querySelector("#texto");
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

// * Input número de la tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
  const valorInput = e.target.value;
  formulario.inputNumero.value = valorInput
    .replace(/\s/g, "") // Elimina espacios
    .replace(/\D/g, "") // letras
    .replace(/([0-9]{4})/g, "$1 ") // espacios cada 4 digítos
    .trim();
  numeroTarjeta.textContent = valorInput;

  if (valorInput === "") {
    numeroTarjeta.textContent = "#### #### #### ####";
    logoMarca.innerHTML = "";
    inputNumero.style.border = "1px solid #b2b7be"; // Quita el borde rojo
    texto.innerHTML = ""; // Limpia el mensaje de error
  }

  if (valorInput[0] === "4") {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/vis.png";
    logoMarca.appendChild(imagen);

  } else if (valorInput[0] === "5") {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/masterc.png";
    logoMarca.appendChild(imagen);
  }

  mostrarFrente();
});


btn.addEventListener("click", validate);
function validate() {
  const valorNumero = inputNumero.value;
  const luhn = validator.isValid(valorNumero);


  if (valorNumero === "") {
    texto.innerHTML = " Este campo es obligatorio";
    inputNumero.style.border = "1px solid red";

  } else if (luhn) {
    texto.innerHTML = "Tarjeta válida";
    inputNumero.style.border = "1px solid green";
  }else {
    texto.innerHTML = " Error de validacion";
    inputNumero.style.border = "1px solid red";
  }
}


// Input nombre de tarjeta
formulario.inputNombre.addEventListener("keyup", (e) => {
  const valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput === "") {
    nombreTarjeta.textContent = "Sofia Torres";
  }

  mostrarFrente();
});

