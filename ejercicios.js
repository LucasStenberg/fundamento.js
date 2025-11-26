//Generar variables let
let nombre = "Lucas"; //string
let edad = 25 ; //number
let viajando = true; //boolean (verdadero-falso)

//Matematica Basica
let a = 12;
let b = 8;
console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplicación: ", a * b);
console.log("División:", a / b);
console.log( nombre, edad, viajando);

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
