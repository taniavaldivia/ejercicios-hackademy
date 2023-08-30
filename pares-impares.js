// Ingresar 10 valores numéricos y mostrar cuántos son pares y cuantos impares

const numeros = [0, 3, 27, 98, 65, 10, 20, 7, 24, 14]
const pares = []
const nones =[]

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    nones.push(numero);
  }
});

console.log(pares.length)
console.log(nones.length)
