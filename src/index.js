import validator from './validator.js';
// Declarando  mis variables
const nombre = document.getElementById('nombre');
const cardNumber = document.getElementById('cardNumber');
const btn = document.getElementById('btn');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const imagen = document.getElementById('imagen');
const mascaraContent = document.getElementById('contenedorMascara');
const agregar = document.getElementById('textoMascara');


// Declarando mi evento
btn.addEventListener('click', validate);


//Declarando mi funcion y sus condiciones
function validate() {
  const valorNombre = nombre.value;
  const valorNumero = cardNumber.value;

  //Aqui insertamos la funciones que vamos a llamar desde validator.js
  const luhm = validator.isValid(valorNumero);
  const mostrarMascara  = validator.maskify(valorNumero);


  //CONDICION PARA INPUT NOMBRE
  if (valorNombre === '') {   
    texto2.innerHTML = ' Este campo es obligatorio'
    nombre.style.border = '1px solid red'       //llama a nombre para utilizar el imput mas no el valor del input
      
  } else {
    texto2.innerHTML = '';
    nombre.style.border = '1px solid green'  
  }


  //CONDICION PARA EL INPUT TARJETA
  if (valorNumero === '') {
    texto.innerHTML = ' Este campo es obligatorio'
    cardNumber.style.border = '1px solid red'
      
  }else if(luhm) { //Aqui validamos si cumple el algoritmo 
    texto.innerHTML = 'Tarjeta válida'
    cardNumber.style.border = '1px solid green'


  }else if (luhm === false && valorNumero.length < 5 ) {
    texto.innerHTML = ' Error de validacion'
    cardNumber.style.border = '1px solid red'
    agregar.innerHTML = valorNumero;  // mostrando  texto de mascara sin# porque es < a5 

  } else {
    texto.innerHTML = ' Error de validacion'
    cardNumber.style.border = '1px solid red'  //cualquier otro caso
  }
 
  if (valorNombre !=='' && valorNumero !== '') {
    mostrarMascara;
    agregar.innerHTML = mostrarMascara;
    imagen.style.display = 'none';
    mascaraContent.style.display = 'grid';
  } 
}


// console.log(validator);
