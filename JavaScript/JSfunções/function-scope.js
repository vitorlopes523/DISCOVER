//function scope
let subject ='view video'

function createThink(subject) {
  subject = 'study'
  return subject
}
console.log(subject)// receber o valor original da variavel
console.log(createThink(subject))// retorna o valor da função
/* obs: se nao houvesse createThink(subject), o valor da variavel iria ser subscrito*/

//arrow finction

const sayMayName = (name) => {
  console.log(name)
}
sayMayName('Vitor Lopes')

//callback function

function oiLinda(linda) {
  console.log('antes de executar o callback')
  linda()
  console.log('depois da callback')
}
oiLinda(
  () => {
     console.log('estou em uma callback')
  }
)

/* Function() constructor

  *expressão new
  *criar um novo objeto
  *this keyword
  */

  function Person(name) {
    this.name = name
    this.walk = function() {
      return this.name + " está andando"
    }
  }
  const vitor = new Person("Vitor")
  const lopes = new Person("Lopes")
  console.log(vitor.walk())
  console.log(lopes.walk())
