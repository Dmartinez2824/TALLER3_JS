import { palabraLarga } from "./modulo4.js";


let cantidad = parseInt(prompt("Cantidad palabras a ingresar"));
    let palabras = [];

    for (let i = 0; i < cantidad; i++) {
         palabras[i] = prompt(`Ingresa la palabra ${i + 1}:`);
        
    }

    let plarga = palabraLarga(...palabras);
    console.log(`La palabra más larga es: ${plarga}`);
    
    
