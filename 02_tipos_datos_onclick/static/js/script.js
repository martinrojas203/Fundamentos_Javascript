// Declaración de variables
let anioNacimiento = 2008; //Tipo Numerico INT
let numeroDecimal = 3.14; //Numerico con parte decimal FLOAT
let cadenaTexto = "Hola, mundo"; //String (solo texto)
let valorBooleano = true; //Verdadero o falso (0,1)
let arregloNumeros = [1, 2, 3, ""]; //Array
let objetoPersona = { nombre: "Ana", edad: 30 }; //Object Diccionario
let valorIndefinid; //Sin valor asignado UNDEFINED
let valorNulo = null; //Valor nulo NULL
const mes = "Junio"; //Constante - no

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Año de Nacimiento: " + anioNacimiento);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}