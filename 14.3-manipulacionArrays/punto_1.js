// // Ejercicio 1 PROPINA

const prompt = require('prompt-sync')();

let total = parseInt(prompt('Ingrese el total de la cuenta: '));
let porcentaje = prompt('Ingrese el procentaje de propina: ');
porcentaje = parseInt(porcentaje)


function calcularPropina(total,porcentaje){
    porcentaje = porcentaje/100;
    total = total + (total * porcentaje);
    return total
};

console.log(`El total es ${calcularPropina(total,porcentaje)}`);