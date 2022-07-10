// Manipulando Strings e Arrays

/* Separe um texto que contém espaços, em uma nova array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/
let phrase = "Se for pra desistir, desista de ser fraco"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

//Criar Array com construtor
let arrayMy = new Array('a', 'b', 'c')
console.log(arrayMy)

//Contar elementos de um array
console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos array
let word = "evolução"
console.log(Array.from(word))