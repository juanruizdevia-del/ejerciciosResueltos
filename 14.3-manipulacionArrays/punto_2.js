// EJERCICIO 2 - Contraseña

const prompt = require('prompt-sync')();

let contraseña = prompt('Ingrese una contraseña: ');

function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return false;
    };

    let hayNumero = false;
    let hayMayus = false;

    for (let caracter of contraseña) {

        if (!isNaN(caracter)) {
            hayNumero = true;
        }

        if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
            hayMayus = true;
        }
    };

    return hayNumero && hayMayus;
}

console.log(validarContraseña(contraseña));