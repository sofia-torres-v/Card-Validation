/* eslint-disable indent */
import validator from "./js/validator.js";
import showMenu from "./js/menu.js";

const menuIcon = document.querySelector(".menu-icon");
const modalMenu = document.querySelector(".modal");
const elementosMenu = document.querySelector("#menu");
const closeModal = document.querySelector(".bx-x#icon-delete");

const tarjeta = document.querySelector("#tarjeta");
const logoMarca = document.querySelector("#logo-marca");

const formulario = document.querySelector("#formulario-tarjeta");
const inputNumero = document.querySelector("#inputNumero");
const inputNombre = document.querySelector("#inputNombre");

const numeroTarjeta = document.querySelector(".numero");
const nombreTarjeta = document.querySelector(".nombre");
const texto = document.querySelector("#texto");
const texto2 = document.querySelector("#texto2");
const btn = document.querySelector("#btn-enviar");

const firma = document.querySelector("#tarjeta .firma p");
const mesExpiracion = document.querySelector(".mes");
const yearExpiracion = document.querySelector(".year");
const cvv = document.querySelector(".cvv");

menuIcon.addEventListener("click", () => showMenu(elementosMenu, modalMenu));

closeModal.addEventListener("click", () => showMenu(elementosMenu, modalMenu));

// Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
    if (tarjeta.classList.contains("active")) {
        tarjeta.classList.remove("active");
    }
};

// Rotación de la tarjeta
tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!formulario.contains(e.target)) {
        inputNumero.style.border = "2px solid #b2b7be";
        texto.innerHTML = "";
        inputNombre.style.border = "2px solid #b2b7be";
        texto2.innerHTML = "";
    }
});

// * INPUT NUMERO TARJETA
formulario.inputNumero.addEventListener("input", () => {
    const valorInput = formulario.inputNumero.value;

    formulario.inputNumero.value = valorInput
        .replace(/\s/g, "")
        .replace(/\D/g, "")
        .replace(/([0-9]{4})/g, "$1 ")
        .trim();
    numeroTarjeta.textContent = valorInput;

    if (valorInput === "") {
        numeroTarjeta.textContent = "#### #### #### ####";
        logoMarca.innerHTML = "";
        inputNumero.style.border = "2px solid #b2b7be";
        texto.innerHTML = "";
    } else {
        inputNumero.style.border = "1px solid #52bd55";
        texto.innerHTML = "";
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

// INPUT NUMERO FORMULARIO
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

// INPUT NOMBRE TARJETA
formulario.inputNombre.addEventListener("input", () => {
    const valorInput = formulario.inputNombre.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput === "") {
        nombreTarjeta.textContent = "Sofia Torres";
        inputNombre.style.border = "2px solid #b2b7be";
        texto2.innerHTML = "";
    }

    mostrarFrente();
});

// INPUT NOMBRE FORMULARIO
formulario.inputNombre.addEventListener("input", () => {
    const valorInput = formulario.inputNombre.value;

    if (valorInput === "") {
        inputNombre.style.border = "2px solid #b2b7be"; // Quitar borde rojo
        texto2.innerHTML = "";
    } else {
        inputNombre.style.border = "1px solid #52bd55"; // Establecer borde verde
        texto2.innerHTML = "";
    }
});
// ------------------------------------------------------------------------------------

// Select del mes y año generado dinámicamnete
for (let i = 1; i <= 12; i++) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerHTML = i;
    formulario.selectYear.appendChild(opcion);
}

formulario.selectMes.addEventListener("change", (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});
formulario.selectYear.addEventListener("change", (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// cvv
formulario.inputCvv.addEventListener("keyup", () => {
    if (!tarjeta.classList.contains("active")) {
        tarjeta.classList.toggle("active");
    }
    formulario.inputCvv.value = formulario.inputCvv.value
        .replace(/\s/g, "")
        .replace(/\D/g, "");
    cvv.textContent = formulario.inputCvv.value;
});
