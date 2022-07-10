/*  
   Prototype

   *prototype-besed language
   *prototype
   *__proto__
   "vitor".__proto__

*/
/* 
  Type conversion (typecasting) vs Type coersion
   *Alteração de um tipo de dado para outro tipo
*/
console.log('9' + 5)// vai juntar os numeros, entendendo que 5 é uma string
console.log(Number('9') + 5)// vai converter o 9 para um namber, somando os valores.


//Manipulando Strings e Números

//Transformar String em Número e Número em String
/*let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))*/

//Contar quantos caracteres tem uma palavra e quantos digitos tem um número
/*let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)*/

// Trasformar um número quebrado em duas casas decimais e trocar ponto por virgula
let number = 234.890122
console.log(number.toFixed(2).replace(".", ","))

// transforme letras munúsculas em maiúsculas. faça o contrário disso também
let word = "Programar é muito legal!"
console.log(word.toUpperCase())
let text = "Programar é muito legal!"
console.log(text.toLowerCase())


//Verificar se o texto contem a palavra Lenda
let phrase = "Eu sou a Lenda !"
console.log(phrase.includes("Lenda"))
