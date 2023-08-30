// Encontrar el mayor de 3 números

let num1 = 0
let num2 = 0
let num3 = 0

function nmayor(num1, num2, num3){
 let mayor = num1
 
 if (num2 > mayor) 
  mayor = num2 
 if (num3 > mayor) 
  mayor = num3 
 
 return mayor
}

console.log(nmayor(5,16,0))