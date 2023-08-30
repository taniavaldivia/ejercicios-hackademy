// Calcular el incremento salarial de una persona: Si su salario es menor a 15 mil, el incremento será del 20% y si es mayor a 15mil, el incremento será del 15%

let salario = 0
let incremento = 0
let resultado = 0

function salariofinal(salario) {
  if (salario < 15000) {
    incremento = .20 * salario
  } else {
    incremento = .15 * salario
  }
  return resultado = salario + incremento
}

console.log(salariofinal(20000))
