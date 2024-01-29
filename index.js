// Calculo Precio con Iva
function Producto(nombre, cantidad, precio){
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
    this.precioConIVA = function(){
        let precioFinal = this.precio * 1.9;
        return "$" + precioFinal +  " " + "iva"
    }
    this.precioConDESCUENTO = function(){
        let precioFinal = this.precio * 1.9
        if(precioFinal >= 9000){
            return "$" + (precioFinal * 0.20) +  " " + "descuento"
        }
        else{
            return "$" + precioFinal + " " +"Sin descuento"
        }
    }
    
}
const Producto1 = new Producto("producto1", 1, 5000)
const Producto2 = new Producto("producto2", 1, 6000)
const Producto3 = new Producto("producto3", 1, 10000)
const Producto4 = new Producto("producto4", 1, 2000)

console.log(Producto1.precioConIVA())
console.log(Producto1.precioConDESCUENTO())
console.log(Producto2.precioConIVA())
console.log(Producto2.precioConDESCUENTO())
console.log(Producto3.precioConIVA())
console.log(Producto3.precioConDESCUENTO())
console.log(Producto4.precioConIVA())
console.log(Producto4.precioConDESCUENTO())

// Calcular el precio  en cuanto a la cantidad de productos
let NUMERO = parseInt(prompt("Ingrese precio iva"))
for(let i=0; i<10; i++){
    let RESULTADO = NUMERO * i
    console.log(NUMERO + "x" + i + "=" + RESULTADO)
}
