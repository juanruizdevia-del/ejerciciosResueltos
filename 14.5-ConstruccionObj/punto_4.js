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

carro.agregarProd('arroz',10);
carro.agregarProd('maiz',20);
carro.calcularDes();