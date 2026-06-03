let nomina = [];

class Empleado {
    static listaEmpleados = [];
    /*
    La propiedad listaEmpleados pertenece a la clase mas no a los objetos.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    */
    constructor(nombre, cargo, salario, activo = true) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
        Empleado.listaEmpleados.push(this); //  Se añade el objeto recien creado a listaEmpleados
    }

    presentarse() {
        console.log(`
        Nombre De empleado:${this.nombre}
        Cargo: ${this.cargo}
        `);
    }

    calcularSalarioAnual() {
        return this.salario * 12
    }

    desactivar() {
        this.activo = false;
    }

    info() {
        console.log(`
        Nombre De empleado:${this.nombre}
        Cargo: ${this.cargo}
        Salario: ${this.salario}
        Trabajador activo: ${this.activo}`);
    }
}

empleadoUno = new Empleado('Juan', 'Desarrollador', 20000);
empleadoDos = new Empleado('Laura', 'Tester', 10000);
empleadoTres = new Empleado('Manuel', 'Marketing', 5000);
empleadoCuatro = new Empleado('Pedro', 'celador', 20000);

/*

Sintaxis para heredar Empleado en lider:

class Lider extends Empleado{
}

*/

class Lider extends Empleado {
    constructor(nombre, salario, equipo = []) {
        super(nombre, 'lider de equipo', salario);
        this.equipo = equipo;
    }

    presentarEquipo() {
        console.log(this.equipo);
    }

    agregarMiembro(posicion) {
        this.equipo.push(Empleado.listaEmpleados[posicion].nombre);
    }

    info() {
        super.info();
        console.log(`
        Numero de Integrantes de equipo: ${this.equipo.length};
        `);
    }
}

liderUno = new Lider('Jose', 400000);
liderDos = new Lider('Maria', 80000)

function totalNomina() {
    let nominaTotal = 0;
    
    for (let empleado of Empleado.listaEmpleados) {
        nominaTotal += empleado.salario; 
    }
    return {
        mensual: nominaTotal,
        anual: () => nominaTotal * 12
    };
}

console.log(`El total de la nomina de todos los empleados es ${totalNomina().mensual}. Anual: ${totalNomina().anual()}`);

empleadoUno.desactivar();
empleadoUno.info();

liderUno.agregarMiembro(0);
liderUno.info();
liderUno.presentarEquipo();