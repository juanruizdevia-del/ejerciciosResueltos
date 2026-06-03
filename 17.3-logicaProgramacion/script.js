const boton = document.getElementById('boton');
const respuestaHTML = document.getElementById('respuesta');

// Añadimos 'e' para controlar el evento de envío
boton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página se refresque
    
    // Ahora sí existen estos IDs en el HTML
    const n1 = parseInt(document.getElementById('one').value);
    const n2 = parseInt(document.getElementById('two').value);
    const n3 = parseInt(document.getElementById('three').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        respuestaHTML.innerText = "Por favor ingrese todas las casillas";
        return;
    }

    const ordenar = new Calculate(n1, n2, n3);

    respuestaHTML.innerHTML = `
        Menor a Mayor: ${ordenar.smaller2largest()}
        Mayor a Menor: ${ordenar.largest2smaller()}
    `;
});

class Calculate {
    constructor(numberOne, numberTwo, numberTree) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.numberTree = numberTree;
    }

    smaller2largest() {
        const arreglo = [this.numberOne, this.numberTwo, this.numberTree];
        return arreglo.sort((a, b) => a - b);
    }

    largest2smaller() {
        const arreglo = [this.numberOne, this.numberTwo, this.numberTree];
        return arreglo.sort((a, b) => b - a);
    }
}

