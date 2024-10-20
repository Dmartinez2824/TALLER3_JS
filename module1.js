export function america(numero) { //funcion tarjeta america
    let exp = /^3[4-7]\d{13}$/; // ^ inicia - $ termina - [] parametro - () - \d que son digitos
     console.log(exp.test(numero));
    return false
}


export function diners (numero) {//funcion tarjeta diners
    let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/;
    // let exp = /^3[068]\d{12}$/;
    console.log(exp.test(numero));
    return false
}

export function discover(numero) { //funcion tarjeta discover
    let exp = /^6011\d{12}$/;
    console.log(exp.test(numero));
    
    return false;
}

export function mastecard(numero) { //funcion tarjeta mastercard
    let exp = /^5[1-5]\d{14}$/; ///51 | 55
    console.log(exp.test(numero));
    return false
}
export function visa(numero) { //funcion tarjeta visa
    let exp = /^4{13}\d$/;
    console.log(exp.test(numero));
    return false
}