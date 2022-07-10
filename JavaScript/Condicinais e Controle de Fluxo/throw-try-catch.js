//throw

function sayMayName(name ='') {
  if (name === '') {
      throw 'Nome é obrigatório'
  }
  console.log(name)
}

//try...catch
try {
  sayMayName('')
} catch(e) {
  console.log(e)
}
console.log('após a função de erro')