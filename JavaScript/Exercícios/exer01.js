/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

*de 90 para cima - A
*entre 80 - 90   - B
*entre 70 - 79   - C
*entre 60 - 69   - D
*menor que 60    - F
*/

function getNota (nota) {
let notaA = nota >= 90 && nota <= 100
let notaB = nota < 90 && nota >= 80
let notaC = nota < 80 && nota >= 70
let notaD = nota < 70 && nota >= 60
let notaF = nota < 60 && nota >= 0

let notaFinal;

if (notaA){
  notaFinal = 'A'
}
else if (notaB) {
  notaFinal = 'B'
}
else if (notaC) {
  notaFinal = 'C'
}
else if (notaD) {
  notaFinal = 'D'
} else if (notaF) {
  notaFinal = 'F'
} else {
  notaFinal = 'Nota invávlida'
}
return notaFinal
}

console.log(getNota(101))
console.log(getNota(-1))
console.log(getNota(0))
console.log(getNota(1))
console.log(getNota(45))
console.log(getNota(60))
console.log(getNota(61))
console.log(getNota(75))
console.log(getNota(83))
console.log(getNota(95))
console.log(getNota(89))

