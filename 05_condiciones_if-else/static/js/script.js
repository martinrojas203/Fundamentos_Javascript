//Ejercicios Condiciones IF - ELSE
console.log("Conexion con js establecida...");

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o mas) o no.
 */
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Input string
    // Input conversión string a número
    //Condición if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { // && compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor válido.")
    }
}

function contraSena() {
    let clave = "1234";
    let contra = prompt("Ingrese su Contraseña: ");
    if (contra == clave) {
        alert("Su contraseña es correcta")
    } else {
        alert("Acceso denegado")
    }
}
function validarPar() {
    let verificar = prompt(" El número es par? ");
    if (verificar % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
}
function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura: "));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace calor");
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable")
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frio")
    } else {
        alert("Ingrese un valor valido");
    }
}

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero: "));
    let num2 = parseInt(prompt("Ingresar segundo numero: "));
    if (num1 < num2) {
        alert("El numero " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("El numero " + num1 + " es igual que " + num2);
    } else {
        alert("El numero " + num1 + " es mayor que " + num2);
    }
}

function notas() {
    let ingresa = parseInt(prompt("Ingresa tu Nota: "));
    if (ingresa <= 4) {
        alert("Desaprobado")
    } else if (ingresa > 4 && ingresa <= 7) {
        alert("Aprobado")
    } else {
        alert("Ingrese un valor válido")
    }
}

function usuario() {
    let userName = prompt("Ingrese su usuario: ");
    let user = "admin";
    if (userName == user) {
        alert("Bienvenido, administrador.")
    } else {
        alert("Usuario no reconocido")
    }
}

function palabraMayuscula() {
    let letra = prompt("Ingresa palabra")
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("la palabra comienza con a mayuscula")
    } else {
        alert("la palabra no comienza con a mayuscula")
    }
}

function precio() {
    //Añadir un porcentaje de descuento e IVA y mostrar.
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: EJemplo 20"));
    descuento /= 100; // operacion para llevar a decimal
    let precioDescuento = parseFloat(prompt("ingrese el precio del producto"));
    if (precioDescuento > 10000) {
        alert(`el valor ingresado fue: ${precio}\n
            IVA: ${precio * iva}\n
            Precio Total: ${precio * 1.19}\n
            `);
    } else {
        alert("precio normal");
    }
}

function licenciaEdad(){
    let edad = parseInt(prompt("Ingrese su edad: "));
    let licencia = prompt("Indica si tienes licencia si/no");
    if(edad > 100){
        alert("Usted puede conducir!");
    }else if(edad < 18 && edad > 0 && Licencia == "no"){
    if(licencia == "si"){
        alert("Usted puede conducir!")
    }
} else if(edad < 18 && edad > 0){
    alert("Usted no puede conducir")
    }else{
        alert("Ingrese valores válidos!");
    }
}
