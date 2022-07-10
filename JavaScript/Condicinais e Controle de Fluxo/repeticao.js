// Estrutura de Repetição
//for
//break - para a execução do loop
//continue - pula a execução do momento

for( let i = 10; i > 0; i--) {
  if(i==6) {
    continue;
  }
  console.log(i)
}

//While

let t = 0
while(t < 10) {
  console.log(t)
  t++;
}

//for...of
let name = 'vitor'
let names = ['mateus', 'diogo', 'mayk']

for(let name of names) {
  console.log(name)
}

//for...in
let person = {
  name : 'vitor',
  age: 22,
  weight : 67.50 
}
for(let property in person) {
  console.log(property)
  console.log(person[property])

}