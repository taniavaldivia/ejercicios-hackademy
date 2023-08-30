// Ingresar 10 valores numéricos y mostrar cuantos son positivos y cuántos negativos

const numeros = [0, -3, -27, -98, -65, -10, -20, 7, 24, 14]
const positivos = []
const negativos = []

numeros.forEach(numero => {
  if (numero >= 0) {
    positivos.push(numero);
  } else {
    negativos.push(numero)
  }
});

console.log(positivos)
console.log(negativos)
console.log(positivos.length)
console.log(negativos.length)
