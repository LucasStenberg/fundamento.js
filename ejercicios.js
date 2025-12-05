//Generar variables let
//let nombre = "Lucas"; //string
//let edad = 25 ; //number
//let viajando = true; //boolean (verdadero-falso)

//Matematica Basica
//let a = 12;
//let b = 8;
//console.log("Suma: ", a + b);
//console.log("Resta: ", a - b);
//console.log("Multiplicación: ", a * b);
//console.log("División:", a / b);
//console.log( nombre, edad, viajando);

//Funciones

function saludar(persona){
    return "Hola, " + persona + "!";
}

console.log(saludar("Lucas"));

//Funcion util para viajes

function convertirUSDaPESOS(montoUSD,tasa){
    return montoUSD * tasa;
}

console.log ("100 USD en pesos: ",convertirUSDaPESOS(100, 1000));

const nombre = "Lucas"; //Declaras una variable que NO va a cambiar

let edad = 27; //Variable modificable

const mayorDeEdad = edad >= 18; //booleano con expresion lógica

let altura; //variable sin valor, undefined.
const nada = null; //null, valor intencionalmente vacio
const persona = {nombre, edad};//objeto con propiedades
const frutas = ["manzana", "banana", "pera"];//Array,corcho cerrado
console.log(nombre);//imprime el valor para verlo en consola
console.log(edad);
console.log(mayorDeEdad);
console.log(altura);
console.log(nada);
console.log(persona);
console.log(frutas);

//Operadores básicos

const a = 10;
const b = 3;

const suma = a + b ;
const resta = a - b;
const multiplicacion = a * b;
const division = a / b ;
const modulo = a % b;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log ("Multiplicacion:", multiplicacion);
console.log("division: "), division;
console.log("modulo:", modulo);

//comparaciones

const esMayor = a > b;
const esIgual = a === b;
const esDistinto = a !== b;

console.log("a > b:", esMayor);
console.log ("a === b:", esIgual);
console.log ("a !== b:", esDistinto);

//logisticos

const condicion1= true;
const condicion2=false;

console.log ("AND:", condicion1 && condicion2);
console.log ("OR: ", condicion1 || condicion2);
console.log ("NOT:", !condicion1);

//Clase 3: Condicionales

//if (condicion){
    // código si la condicion es true
//} else {
    //codigo si es false
//}

//Ejercicio de prueba

const edadUsuario = 20;

if (edadUsuario >= 18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

//Condicional con varias ramas

const temperatura = 15;
if(temperatura > 30){
    console.log ("Hace calor");
}else if (temperatura >= 15){
    console.log("Clima agradable");
}else{
    console.log("Hace frío");
}

//Condicional con string

const rol = "admin";

if(rol === "admin"){
    console.log ("Acceso total");
}else if (rol === "user"){
    console.log ("Acceso limitado");
}else{
    console.log("Sin acceso");
}

//Ejercicio 4: Bucles

//For basico
for (let i = 1; i <=5; i++){
    console.log("Número: ", i);
}

//Recorrer un array con for
const frutasloop = ["manzana","banana", "pera"];

for (let i = 0; i < frutasloop.length; i++){
    console.log("Frutas", frutasloop[i]);
}

//While

let contador = 0;

while (contador < 3 ){
    console.log ("Contador: ", contador);
    contador++;
}

//for...of (el mas moderno y legible para arrays)

for (const fruta of frutasloop){
    console.log ("Fruta con for... of", fruta);
}


//Clase 5: funciones

function sumar(a, b){
    return a + b;
}

const resultado = sumar(10, 20);
console.log (resultado); //30

//Tipos

// Clasica

function saludar (nombre){
    return "Hola: " + nombre;
}

//función felcha, mas moderna y uusada

const saluudar = (nombre) => {
    return "Hola " + nombre;
};

//Ejercicios ejemplo
//1. Funcion que suma dos valores

function sumar (a,b) {
    return a + b;
}
console.log ("Suma: ", sumar(5,7));

//2. Funcion que verifica si un numero es par

function esPar(numero) {
    return numero % 2 === 0;
}
console.log ("Es par de 10: ", esPar(10));
console.log ("Es par 7: ", esPar(7));

//3. Funciones que genera una descripcion
function presentarPersona (nombre, edad){
    return "Mi nombre es ${nombre} y tengo ${edad} años." ;
}
console.log (presentarPersona("Lucas, 25"));

//4. Funcion real: calcular descuento sobre un precio

function calcularDescuento (precio,porcentaje){
    const descuento = precio * (porcentaje / 100);
    return precio - descuento;
}
console.log ("Precio Final: ", calcularDescuento(1000,15));

//Función obtener mayor

function obtenerMayor (a,b){
    if (a > b){
        return a;
    }else
        return b;
}
console.log ("El mayor es: ", obtenerMayor(10,7));
console.log ("El mayor es: ", obtenerMayor (5,20));
