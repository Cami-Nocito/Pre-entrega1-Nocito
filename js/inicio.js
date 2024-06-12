//Pedido de nombre nombre

let nombre = prompt("Ingresa tu nombre")
const persona1 = { nombre }
if (nombre == "") {
    alert("No has ingresado un nombre");
    prompt("Ingresa un nombre para continuar")
}
else {
    alert("Bienvenido " + nombre)
    console.log("Su nombre es" + nombre)
}


//Calcular edad para ingresar

const Anio1 = 2024
const MayorDeEdad = 18
let Anio2 = parseFloat(prompt("Por favor, introduzca su año de nacimiento"));
function restar(a, b) {
    return a - b;
}

let resultado = restar(Anio1, Anio2)
alert("Tienes " + resultado + " años")
console.log("Su edad es: " + resultado)

if (resultado < MayorDeEdad) {
    alert("Perdón, necesitas tener la mayoría de edad para continuar")
    let = nuevaSolicitud = prompt("Ingresa tu año de nacimiento");
}
else {
    alert("Puedes continuar")
    console.log("Tiene la mayoría de edad")
}

//Comprar productos
let Harina = 750;
let MapleDeHuevo = 2500;
let Azucar = 450;
let Aceite = 750;

const products = [
    { Marca: "Harina", precio: 750 },
    { Marca: "Maple de Huevos", precio: 2500 },
    { Marca: "Azúcar", precio: 450 },
    { Marca: "Aceite", precio: 750 }
];










let ListaDeCompra = prompt("Qué productos desea comprar?: Harina, Maple de Huevos, Azúcar Aceite")
alert("Usted ha comprado " + ListaDeCompra)
function sumar(a, b) {
    return a + b
}
let Compra = sumar()
