class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Producto (prompt("Ingrese nombre del producto"), parseFloat(prompt("Ingrese Precio del producto")), parseInt(prompt("Ingrese stock del producto")));

const producto2 = new Producto (prompt("Ingrese nombre del producto"), parseFloat(prompt("Ingrese Precio del producto")), parseInt(prompt("Ingrese stock del producto")));

const producto3 = new Producto (prompt("Ingrese nombre del producto"), parseFloat(prompt("Ingrese Precio del producto")), parseInt(prompt("Ingrese stock del producto")));

const producto4 = new Producto (prompt("Ingrese nombre del producto"), parseFloat(prompt("Ingrese Precio del producto")), parseInt(prompt("Ingrese stock del producto")));

const productos = [producto1, producto2, producto3, producto4];

console.log("Productos ingresados = ")
productos.forEach(function(productos){
    console.log(productos);
})

let acum = 0;

productos.forEach(function(productos) {
    if (productos.stock > 100) {
        acum ++;
    }
})

console.log ("Cantidad de productos con un stock mayor a 100 = " + acum);

let promedio = 0;
let cont = 0;

productos.forEach(function(productos) {
    cont += productos.precio;
})

promedio = cont / productos.length;

console.log("Promedio de los precios de los productos = " + "$" + promedio);


const productosimp = productos.map( productos => {
    return productos.precio * 1.21;
})

console.log("Precio de los productos con IVA: ")
productosimp.forEach(function(productosimp) {
    console.log(productosimp);
})