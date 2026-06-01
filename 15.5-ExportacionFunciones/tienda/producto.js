// Clase Producto.

export {
    Producto,
    ProductoDigital
};

class Producto {
    static listaProductos = [];
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        Producto.listaProductos.push(this);
    }

    calcularTotal() {
        const IVA = 0.19
        return this.precio += this.precio *= IVA;
    }

    aplicarDescuento(porcentaje) {
        const DESCUENTO = porcentaje / 100;
        return this.precio -= this.precio *= DESCUENTO;
    }

    resumen() {
        console.log(`Nombre De Producto: ${this.nombre} | Categoria: ${this.categoria} | Precio Base: ${this.precio}`);
    }

    targeta() {
        console.log(`Nombre De Producto: ${this.nombre} | Categoria: ${this.categoria} | Precio con IVA: ${this.calcularTotal()}`);
    }
};

class ProductoDigital extends Producto{
    constructor(nombre,precio,licencia){
        super(nombre,precio,'Producto Digital');
        this.licencia = licencia;
    }

    calcularTotal() {
        return 0;   //  los productos digitales no tienen IVA.
    }

    targeta(){
        super.targeta();
        console.log(`Tipo de licencia: ${this.licencia}`);
    }
};
