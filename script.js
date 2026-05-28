let nombre = 'Juan Ruiz';
let edad = 24;
let esEstudiante = true;
console.log(nombre,edad,esEstudiante);


let sinValor;
let valorNulo = null;
console.log(sinValor, valorNulo);


const prompt = require('prompt-sync')();
let birthYear = prompt('Inserte su año de nacimiento: ');
const date = new Date();
let age = date.getFullYear() - birthYear;
console.log('Edad: ',age);

let a = prompt('Escriba valor numero1: ');
let b = prompt('Escriba valor numero2: ');
a = parseInt(a);
b = parseInt(b)
console.log('suma: ', a + b);


edad = prompt('Escriba su edad: ');
if(edad >= 18){
    console.log('Puedes entrar');
}
else{
    console.log('No puedes entrar');
}


let numero = prompt('Escriba numero: ');
if(numero > 0){
    console.log('Positivo');
}
else if(numero < 0){
    console.log('Negativo');
}
else{
    console.log('Es cero');
}


numero = prompt('Escribe un numero ')
let c = 0
while (c <= numero) {
    console.log(c);
    c++
}


numero = prompt('Escribe de nuevo un numero ')
for (i = 1; i <= numero; i++) {
     console.log(i);
}


