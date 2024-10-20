
let cantidad = parseInt(prompt("Ingrese n números"));

const numeros = [];
const ordenado = [];

for(let i = 0; i < cantidad; i++) { // for ingresar valores al array a ordenar
    numeros[i] = parseInt(prompt(`Ingrese valor ${i + 1}: `));
}
let actual = 0; //inicializar en 0
let anterior = 0; //inicializar en 0

for(let i = 0; i < numeros.length; i++) { //for de valores desordenados
    actual = 0; 
    for(let j = 0; j < numeros.length; j++) { // for para ubicar valores
        if (numeros[j] > anterior) { // parametro de numeros sea mayor al anterior osea j < "j-1" o al comienzo con 0
            
            if (actual === 0 || numeros[j] < actual) { //para cambiar el valor de actual que inicia en 0 a
                actual = numeros[j];
            }
        }
    }
    ordenado[i] = actual;
    anterior = actual;
}

console.log(`Números ordenados: ${ordenado}`);




// mayorMenor(cantidad);
