import promptSync from 'prompt-sync';
const prompt = promptSync();

// Funcion ejecutable:

function run() {
    let n;
    while (true) {
        n = prompt('Escriba valor de x para (x!) | -1 para finalizar: ');

        if(n == -1){
            console.log('programa finalizado, adios :)');
            break;
        }
        if(!validar(n)){
            continue;
        }

        console.log('factorial de ' + n + ':');
        console.log(factorial(n));
    }
}

// Validacion positivo y operacion.

function validar (n){       // validar que n sea positivo, ! solo aplica para numeros enteros positivos.
     if (n < 0){
        console.log('Dato invalido, numero debe ser un entero positivo.');
        return false;
     }
     return true;
}

function factorial(n) {
    let operacion = '';
    let factorial = 1;
    for(let i = 1;i <= n;i++){
        factorial *= i;
        if(i == n){
            operacion += i;
            continue;
        }
        operacion += i + ' x ';
        
    }
    return `${operacion} = ${factorial}`
}







run();