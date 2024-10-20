import {america,diners,discover, mastecard, visa} from "./tarjetas.js"; //importar funciones modulo 1

let confirmacion = true; // confirmacion bucle 
while (confirmacion) { //inicia en true, bucle para el caso que haya un error me vuelva pedir la tarjeta
    let numero = prompt("Ingrese número de tarjeta:"); //ingreso de caracteres 
    
    america(numero); //exporta 'numero' a la funcion america
    diners(numero); //exporta 'numero' a la funcion diners
    discover(numero); //exporta 'numero' a la funcion discover
    mastecard(numero); //exporta 'numero' a la funcion mastercard
    visa(numero); //exporta 'numero' a la funcion visa

    try {
        if (isNaN(numero)) { //caracteres diferentes a numeros
            throw new Error("Caracteres no permitidos."); //nueva excepcion
        }
        if (numero.length < 13 || numero.length > 16) { //longitud de digitos
            throw new Error("Longitud no válida."); //nueva excepcion
        }
        if (parseInt(numero) < 0) { //numeros negativos
            throw new Error("No se permiten números negativos."); //nueva excepcion
        }

        // Validar tipo de tarjeta
        if (america(numero)) { //filtro tipo de tarjeta 
            alert("Tarjeta American Express válida.");
            confirmacion = false; //para salir del bucle
            break;
        } else if (diners(numero)) {
            alert("Tarjeta Diners válida.");
            confirmacion = false;
            break;
        } else if (discover(numero)) {
            alert("Tarjeta Discover válida.");
            confirmacion = false;
            break;
        } else if (mastecard(numero)) {
            alert("Tarjeta MasterCard válida.");
            confirmacion = false;
            break;
        } else if (visa(numero)) {
            alert("Tarjeta Visa válida.");
            confirmacion = false;
            break;
        } else {
            alert("Número de tarjeta no válido.");
        }

    } catch (error) {
        alert(error.message); // mensaje de error si llega a suceder, imprime la excepcion
    }
}
