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