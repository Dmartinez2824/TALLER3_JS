export function sumaPrimos (primos){
    let contadorPrimos = 0;
    for(let i=0; i<primos.length; i++){
        let esprimo = primos[i] % 2;
        if (esprimo === 1 || primos[i] === 2) {      
           contadorPrimos++;
        }else{     
        }
    }
    return alert(contadorPrimos);
}

export function sumar(primos) {
    let suma = 0;
    for(let i=0; i<primos.length; i++){
        suma += primos[i];
    }
    return alert(suma);
}

export function sumaPares (primos){
    for(let i=0; i<primos.length; i++){
        let esprimo = primos[i] % 2;
        let contadorPares = 0;
        if (esprimo === 1 || primos[i] === 2) {      
        }else{
            contadorPares++;       
        }
    }
    return alert(contadorPares);
}

export function promedioPrimos (primos){
    let promedio = 0;
    let suma = 0;
    let contadorPrimos = 0;
    for(let i=0; i<primos.length; i++){
        let esprimo = primos[i] % 2;
        if (esprimo === 1 || primos[i] === 2) {      
           contadorPrimos++;
           suma += primos[i];}
        }
        promedio = (suma*contadorPrimos)/100;
        return alert(promedio);
}

export function promedioPares (primos){
    let promedio = 0;
    let suma = 0;
    let contadorPares = 0;
    for(let i=0; i<primos.length; i++){
        let esprimo = primos[i] % 2;
        if (esprimo === 1 || primos[i] === 2) {   
        } else{  
            contadorPares++;
            suma += primos[i];
        }
    }
        promedio = (suma*contadorPares)/100;
        return alert(promedio);
}