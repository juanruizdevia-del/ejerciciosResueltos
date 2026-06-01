// Clases Usuario, UsuarioVIP

export {
    Usuario,
    UsuarioVIP
}

class Usuario {
    static listaUsuarios = [];
    constructor(nombre, email, rol = 'cliente') {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
        Usuario.listaUsuarios.push(this);
    };

    saludo() {
        console.log(`Nombre: ${this.nombre} | Rol: ${this.rol}`);
    };

    desactivar() {
        this.activo = false;
        return `Desactivación con exito`
    };

    resumen() {
        console.log(`
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
        Activo: ${this.activo}
        `);
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, 'Cliente VIP')
        this.membresia = membresia
    }

    saludo() {
        super.saludo();
        console.log(`Tipo de membresia: ${this.membresia}`);
    }

    beneficios() {
        if (this.membresia === 'gold') {
            console.log('Aqui van beneficios Gold');
        }
        if (this.membresia === 'platino') {
            console.log('Aqui van beneficios Platino');
        }
    }

}



