const validator = {
  isValid:function(valorNumero) {

    const newArray = valorNumero.split('').reverse().map(x => parseInt(x));
   
    for (let i = 0; i < newArray.length; i++) {

      if (i%2 !== 0) {     //encontrar las pocisiones pares según el algoritmo.
        newArray[i]*=2 
       
        if (newArray[i] > 9)  {
          newArray[i] -= 9;
  
        } else {
          newArray[i]*= 1;
        }

      } else {
        newArray[i]*=1;
      }
    }

    let total = 0;
    //recorrer totdos los numero actualizados
    for (let i = 0; i < newArray.length; i++) {
      total = total + newArray[i];
    }


    if (total % 10 === 0) {
      return true;
      
    } else  {
      return false;
      
    }

  },

  maskify:function(valorNumero) {
  
    let nuevoNumero = valorNumero;
    if (valorNumero.length > 4) {    
      const numerosSimbolo = '#'.repeat(valorNumero.length -4);    
      const mostrarUltimos = valorNumero.substring(valorNumero.length-4);
      nuevoNumero = numerosSimbolo + mostrarUltimos;
    } 
    return nuevoNumero;
   
  }

};

export default validator;
