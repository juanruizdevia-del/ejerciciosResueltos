const prompt = require('prompt-sync')();

function getCelsius() {
    let celsius = prompt('Escriba temperatura en grados Celsius: >');
    celsius = parseFloat(celsius);
    return celsius;
}

function kelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32;
}

function run() {
    const celsius = getCelsius();
    if (Number.isNaN(celsius)) {
        return `Valor incorrecto`;
    }
    return console.log(`| Celsius: ${celsius} | Kelvin: ${kelvin(celsius)} | Fahrenheit: ${fahrenheit(celsius)} |`);
    ;
}

run();