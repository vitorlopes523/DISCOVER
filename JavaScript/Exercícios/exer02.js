/* ### Sistema de gastos familiar

Criar um objeto que possuirá duas propriedades, ambas do tipo array:
   *receitas: []
   *despeas:  []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo
*/

let gastosFamiliar = {
   receitas : [100, 34.78, 800.89],
   despesas : [90, 67.90, 500.87]
}
function sum(array) { //O array faz referencia ao receitas e despesas
   let total = 0;

   for(let value of array){
      total += value
   }
   return total
}

function totalSaldo () {
  const calculoReceitas = sum(gastosFamiliar.receitas)
  const calculoDespesas = sum(gastosFamiliar.despesas)

  const total = calculoReceitas - calculoDespesas

  const positivo = total >= 0

  let saldoFinal = "Negativo"
  
  if (positivo) {
   saldoFinal = "Positivo"
  }

  console.log(`Seu saldo é ${saldoFinal} de: ${total.toFixed(2)}R$`)
}
totalSaldo()