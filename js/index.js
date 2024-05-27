// Pedido de ingresar un nombre
let nombreUsuario = prompt("Ingresar tu nombre")
if (nombreUsuario == "") {
    alert("No ingresaste un nombre");
    prompt("Ingresar nombre de usuario")
}
else {
    alert("Tu nombre es " + nombreUsuario)
}

// Cálculo de edad
const Anio1 = 2024
const MayoriaEdad = 18
let Anio2 = parseFloat(prompt("Por favor, introduzca su año de nacimiento"));
function restar(a, b) {
    return a - b;
}
let resultado = restar(Anio1, Anio2);
console.log("Tu edad es:" + resultado);
alert("Tu edad es: " + resultado);
if (resultado < MayoriaEdad) {
    alert("Perdón, necesitas tener la mayoría de edad para continuar")
    let= nuevaSolicitud= prompt("Ingresa tu año de nacimiento");
}
else{
    alert("Puedes continuar")
}

//Pedido de préstamos
let Prestamo= prompt("Cuál es el monto que desea pedir?")
if (Prestamo ==""){
    alert("no ha ingresado un monto")
    prompt("ingrese un monto")
}
else[
    alert("Su monto es:" + Prestamo)
]

