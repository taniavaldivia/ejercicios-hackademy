//Encontrar si un número es primo o no.

let num = 0

function esPrimo(num) {
    // Se define primer if porque el número 1 o 0 no es primo por default
    if (num < 2) {
     return "No es primo"
    }
    // Se hace ciclo for para determinar si un número no es primo al calcular si es divisible por otro número; si el módulo de ese número da 0 (Ver segundo if)
    for (let i = 2; i < num; i++) {
      if (num % i === 0){
        return "No es primo"}
    }
    //Si el loop no encuentra que el número sea divisible por otro, entonces sale del loop y significa que es primo
    return "Es primo"
}

console.log(esPrimo(30))
console.log(esPrimo(1))
console.log(esPrimo(5))
console.log(esPrimo(4))