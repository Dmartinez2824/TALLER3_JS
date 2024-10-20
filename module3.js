export function mayorMenor(a) {
    const numeros = [];

    for(let i=0; i<a; i++){
    
         numeros[i] = parseInt(prompt(`ingrese valor ${i+1}: `));
    }
    
    for(let i=0; i<a; i++){
        let actual = 0;
        let anterior = 0;
        for(let j=1; j<numeros.length-1; j++){
            if (numeros[j] > numeros[j+1]){
                let cambio =numeros[j];
               numeros[j] =numeros[j + 1];
               numeros[j + 1] = cambio;      
            }
        }
    }
    return console.log("Array ordenado:", numeros);
}