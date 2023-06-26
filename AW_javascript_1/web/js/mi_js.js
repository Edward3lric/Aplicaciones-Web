
//alert("Mi primer JS");
//respuesta = prompt("Y quien es tu artista favorito?");
//alert("No sabia que te gustaba " + respuesta);

// Preparación de memoria

// Alcanze global
var numero1 = 15;
// Alcanze local
let numero2 = 16;
// No se vuelve inicializar
const numero3 = 20;


//let edad = prompt("Cuantos años tienes?");
//alert("Tu edad sera dentro de dos años de: " + (edad + 2));

let estoy = true;
//document.write("Hoy me siento " + estoy);
document.getElementById("mip").innerHTML = "Hoy me siento " + estoy;

const pi = 3.1416;
document.getElementById("numPi").innerHTML = pi;
//pi = 3.14;
//document.getElementById("numPi").innerHTML = pi;

let dato = null;
document.getElementById("datoNull").innerHTML = "" + dato;

let x = 8989;
x += 123;
document.getElementById("numSum").innerHTML = "" + x;
x -= 343;
document.getElementById("numRes").innerHTML = "" + x;
x *= 1.3;
document.getElementById("numMul").innerHTML = "" + x;
x /= 1000;
document.getElementById("numDiv").innerHTML = "" + x;