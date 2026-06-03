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

lista = new ListaCompras();
lista.agregar('Pera');
lista.agregar('Manzana');
lista.agregar('arroz');
lista.mostrar();
