//1. declare uma variável de nome weight
//let weight

//2. que tipo de dado é a variável acima?
//console.log(typeof weight)

/*3. declare uma variavel e atribua valores para cada um dos dados:
    *name: string
    *age: number(integer)
    *stars: number (float)
    *isSubscribed: Boolean
    */
   /*
    let name = 'vitor'
    let age = 22
    let stars = 23.6
    let isSubscribed = true
    */
  
  /*4. a variavel student abaixo é de que tipo de dados?
  4.1 atribua a ela as mesmas propriedades e valores do exercicio 3.
  4.2. mostre no console a segunte mensagem:
  <name> de idade <age> pesa <weight> kg.
  atenção, substitua <name> Bage> e <weight> pelos valores de cada propriedade do objeto
  */
  let student = {
    name: 'vitor',
    age: 22,
    weight: 67,
    stars: 23.6,
    isSubscribed: true
  }
  //console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + ' kg.')

  //5. declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, soment array vazio
  //let students = []
  //console.log(typeof students)

  /*6. reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e color o objeto criado e inserir ele no array)
  */
  let students = [
    student
  ]
  //console.log(students)
  
  //7. coloque no console o valor da posição zero do array acima.
  //console.log(students[0])

  //8. crie um novo student e coloque na posição 1 do array students
  const vitor = {
    name: 'lopes',
    age: 23,
    weight: 1.69,
    isSubscribed: true,
  }
  students[1] = vitor
  console.log(students)

  /*9. sem rodar o codigo responda qual é a resposta do código abaixo e por que? após sua resposta, rode o código e veja se voce acertou.
  console.log(a)
  var a = 1
  R: irá dar um valor underfinet, pois a variavel não foi declarada inicialmente, porem o var é uma variaável global e sofre a elevação, ou seja, sofre rosting e por isso nã dar erro.
  */
  console.log(a)
  var a = 1

