

// // Ejercicio 1 PROPINA

const prompt = require('prompt-sync')();

// let total = parseInt(prompt('Ingrese el total de la cuenta: '));
// let porcentaje = prompt('Ingrese el procentaje de propina: ');
// porcentaje = parseInt(porcentaje)


// function calcularPropina(total,porcentaje){
//     porcentaje = porcentaje/100;
//     total = total + (total * porcentaje);
//     return total
// };

// console.log(`El total es ${calcularPropina(total,porcentaje)}`);

// EJERCICIO 2 - Contraseña

let contraseña = prompt('Ingrese una contraseña ');

function validarContraseña(contraseña) {
    let caracteres = [];

    for(caracter of contraseña){
        caracteres.push(caracter)
    };

    if (contraseña.length <= 8) {
        return false
    }

    for (const caracter of contraseña) {
        if(caracter <= 9){
            return false
        }
    }

    return true    
}
console.log(validarContraseña(contraseña));