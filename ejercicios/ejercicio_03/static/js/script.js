//Variables
//const: Variables que no van a ser reasignadas
//let: Variables cuyo valor cambiará en el tiempo
//var: Obsoleto, Variable que cambian de valor

// Estructura de una funcion base o tradicional

function sumar(numero1, numero2){
    return numero1 + numero2;
}

//Estructura con flecha

const restar = (numero1, numero2) => numero1 - numero2;

//Tipos de datos primitivos

const texto="Hola mundo";
const numero = 12;
const boolean = true;
const nulos = null;

//Arreglos o lista

const personas = ["Juan", "Pedro", "Maria"];


//Objetos literales - Diccionarios en python 

const persona = {
    nombre: "Juan",
    email: "juan@email.com",
    edad:30,
    activo: true

};


//Uso de consola para depuración

console.log(persona);

console.log("Texto:",texto);
console.log("Número:",numero);
console.log("Booleano:",boolean);
console.log("Nulos:",nulos);

console.log("suma:",sumar(5,3));
console.log("resta:",restar(5,3));

const parrafo0 = document.getElementsByTagName("p");

console.log("parrafo 0:", parrafo0)

const parrafo1 = document.getElementsByName("parrafo1");

console.log("parrafo 1:", parrafo1)

const parrafo2 = document.getElementById("parrafo2");

console.log("parrafo 2:", parrafo2)


parrafo2.textContent = "Este es un parrafo modificado desde JS";