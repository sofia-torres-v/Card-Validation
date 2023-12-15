/* eslint-disable indent */
const validator = {
    isValid: function (valorNumero) {
        // Eliminar todos los espacios en blanco
        valorNumero = valorNumero.replace(/\s/g, "");

        // Eliminar todos los caracteres que no sean dígitos
        valorNumero = valorNumero.replace(/\D/g, "");

        // Verificar si el valor resultante es vacío o no es un número
        if (valorNumero === "" || isNaN(valorNumero)) {
            return false;
        }

        const newArray = valorNumero
            .split("")
            .reverse()
            .map((x) => parseInt(x));

        for (let i = 0; i < newArray.length; i++) {
            if (i % 2 !== 0) {
                //encontrar las pocisiones pares según el algoritmo.
                newArray[i] *= 2;

                if (newArray[i] > 9) {
                    newArray[i] -= 9;
                } else {
                    newArray[i] *= 1;
                }
            } else {
                newArray[i] *= 1;
            }
        }

        let total = 0;
        //recorrer todos los numero actualizados
        for (let i = 0; i < newArray.length; i++) {
            total = total + newArray[i];
        }

        if (total % 10 === 0) {
            return true;
        } else {
            return false;
        }
    },

    maskify: function (valorNumero) {
        let nuevoNumero = valorNumero;
        if (valorNumero.length > 4) {
            const numerosSimbolo = "#".repeat(valorNumero.length - 4);
            const mostrarUltimos = valorNumero.slice(-4);
            nuevoNumero = numerosSimbolo + mostrarUltimos;
        }
        return nuevoNumero;
    },
};

export default validator;
