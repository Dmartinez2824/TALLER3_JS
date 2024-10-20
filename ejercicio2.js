import { promedioPares, promedioPrimos, sumaPares, sumaPrimos, sumar } from "./module2.js";

/*
2. Diseñar un programa que me solicite ingresar n cantidad de números por
teclado, luego de ingresar los números el programa me debe solicitar que
operación deseo realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares
Para este ejercicio se solicita trabajar con módulos.
*/
let confirmacion = true;
let numero = parseInt(prompt("ingrese cantidad numeros a digitar"));
while (confirmacion) {
    const primos = [];
    for(let i=0; i<numero; i++ ){
        primos[i] = parseInt(prompt(`Ingrese valor ${i + 1}: `));
     }

    let opcion = prompt(`
        operación deseo realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares`);
    switch (opcion) {
        case "a": 
            sumar(primos);        
            break;
        case "b": 
            sumaPrimos(primos);
            break;
        case "c": 
            sumaPares(primos);
            break;
        case "d": 
            promedioprimos(primos);
            break;
        case "e": 
            promedioPares(primos);
            break;   
        default: "valor incorrecto"
            break;
    }
    let aux = prompt("deseas realizar otra operacion 'si' o 'no'")
    if(aux !== "si"){
        break;
    }
}