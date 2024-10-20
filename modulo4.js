export function palabraLarga(...palabras) {
    let plarga = palabras[0]; 

for (let i=0; i<palabras.length; i++) {
    if (palabras.length > plarga.length) {
        plarga = palabras;
    }
    return plarga;
}}

