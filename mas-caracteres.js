//De 3 strings, imprimir el que tienen más caracteres

// let p = prompt("Escribe aquí tu frase");
const frase1 = "hola este es un string";
const frase2 = "lorem ipson dolorem";
const frase3 = "Hoy comi papaya con almendras y estaba rico";

cantidad1 = frase1.length
cantidad2 = frase2.length
cantidad3 = frase3.length


if (cantidad1 > cantidad2 && cantidad1 > cantidad3) {
    console.log(frase1)
} else if (cantidad2 > cantidad3 ) {
    console.log(frase2)
} else {
    console.log(frase3)
}



