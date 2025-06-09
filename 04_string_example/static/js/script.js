// Uso de strings ejemplo

let nombre = "Martin"; // Variable tipo texto

function usarString() {
    let primeraletra = nombre[0];
    //Uso de length --> Largo de una variable
    //Asignamos valor a primeraletra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraletra +
        "\nUltima letra es: " + ultimaLetra
    );
}
// Tarean: Imprimir segunda letra
// y penultima del apellido
function manipularApellido() {
    let apellido = "Rojas"
    //segunda letra del apellido
    let segundaLetra = apellido[1];
    //penultima letra del apellido
    alert("segunda letra del apellido es : " + segundaLetra
        , "\nPenultima letra del apellido es: "
    );
}