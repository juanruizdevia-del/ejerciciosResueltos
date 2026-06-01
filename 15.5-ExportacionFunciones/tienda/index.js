// Archivo index / IMPORTS

import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";

let clienteReg = new Usuario('Juan', 'juan@gmail.com');
let admin = new Usuario('Pepe', 'Admin@tienda.com', 'aministrador');
let clienteVip = new UsuarioVIP('Laura', 'Laurita@gmail.com', 'platino');

let productoFisicoUno = new Producto('USB Kingston 24GB', 24000, 'tecnologia');
let productoFisicoDos = new Producto('Maleta viaje', 250000, 'accesorios');

let productoDigUno = new ProductoDigital('McAfee 1 mes', 50000, 'mensual');
let productoDigDos = new ProductoDigital('Spotify 3 meses', 65000, 'trimestral');

clienteReg.desactivar();
clienteReg.resumen();

productoFisicoUno.aplicarDescuento(10);     //      10 % de descuento.
console.log(productoFisicoUno.precio);

Producto.listaProductos.forEach(producto => producto.targeta());
Usuario.listaUsuarios.forEach(usuarios => usuarios.resumen());
