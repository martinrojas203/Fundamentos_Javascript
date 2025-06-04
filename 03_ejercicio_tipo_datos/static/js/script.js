// Declaración de variables
let edad = 18; //Tipo Numerico INT
let valorEuter = 2.78; //Numerico con parte decimal FLOAT
let cadenaComidaSaludable = "Vegetales"; //String
let valorBooleano = true; //Verdadero o falso (0,1)
let arregloColor = ["Azul", "amarillo", "Rojo", ""]; //Array
let objetoPersona = { nombre: "Ana", edad: 30 }; //Object Diccionario
let valorIndefinid; //Sin valor asignado UNDEFINED
let valorNulo = null; //Valor nulo NULL
const mes = "Junio"; //Constante

// Funciones para mostrar cada valor con alert()
function mostrarEdad() {
  alert("edad: " + edad);
}

function mostrarValorEuter() {
  alert("Valor Euter: " + valorEuter);
}

function mostrarComidaS() {
  alert("Comida Saludable: " + cadenaComidaSaludable);
}

function mostrarBooleano() {
  alert("Estudiante?: " + valorBooleano);
}

function mostrarColor() {
  alert("Numeros primarios: " + arregloColor);
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