// Calcular el volumen de una esfera

const form = 4/3
const pi = 3.1416
let radio = 0
let volumen = 0

function calcvolumen (radio) {
    return (volumen = form * pi * radio * radio * radio)
} 

console.log(calcvolumen(11))