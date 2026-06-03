

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

// let contraseña = prompt('Ingrese una contraseña: ');

// function validarContraseña(contraseña) {
//     if (contraseña.length < 8) {
//         return false;
//     };

//     let hayNumero = false;
//     let hayMayus = false;

//     for (let caracter of contraseña) {

//         if (!isNaN(caracter)) {
//             hayNumero = true;
//         }

//         if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
//             hayMayus = true;
//         }
//     };

//     return hayNumero && hayMayus;
// }

// console.log(validarContraseña(contraseña));