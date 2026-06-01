
// Primer punto:

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            console.log('Disponible');
        }
        else {
            console.log('No Disponible');
        }
    };
};

libro1 = new Libro('It', 'Stephen King');
libro2 = new Libro('Harry Potter', 'J. K. Rowling');

// console.log(libro1);

// libro1.prestar();

// console.log(libro1);

// libro1.prestar();

// console.log(libro1);

// console.log(libro2);


// Segundo punto

function ListaCompras() {
    this.productos = [];

    this.agregar = function (producto) {
        this.productos.push(producto);
    }

    this.mostrar = function () {
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${i} ${this.productos[i]}`);
        };
    }
}

// lista = new ListaCompras();
// lista.agregar('Pera');
// lista.agregar('Manzana');
// lista.agregar('arroz');
// lista.mostrar();


// Tercer punto

function Reproductor() {
    this.estado = 'detenido';

    this.play = function(estado){
        if(this.estado === 'detenido' || this.estado === 'pausado'){
            this.estado = 'Reproduciendo';
            console.log('Estado cambio a reproduciendo');
        }
        else{
            console.log('Ya esta reproducciendo');
        }
    }
    this.pausa = function(estado){
        if(this.estado === 'Reproduciendo'){
            this.estado = 'pausado';
            console.log('Estado cambio a pausado');
        }
        else{
            console.log('Ya esta reproduciendo');
        }
    }
    this.detener = function(estado){
        this.estado = 'Detenido'
        console.log('Reproductor detenido');
    }
}

// reproductor = new Reproductor();
// reproductor.play();
// reproductor.pausa();
// reproductor.detener();


// Cuarto Punto


function carrito(){
    this.productos = [];
    this.total = 0;

    this.agregarProd = function(producto,precio){
        this.productos.push(producto);
        this.total += precio;
    }

    this.calcularDes = function(total){
        if(this.total  > 100){
            this.total += this.total *= 0.1;
        }
        if(this.total > 50 && this.total <= 100){
            this.total += this.total *= 0.05;
        }
        else{
            console.log('Compra menor a $50, no aplica descuento');
        }
    }
}

carro = new carrito();

// carro.agregarProd('arroz',10);
// carro.agregarProd('maiz',20);
// carro.calcularDes();