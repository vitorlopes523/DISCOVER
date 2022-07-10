//Switch

// break para de executar o código

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
      case '+':
         result = number1 + number2
         break
      case '-':
        result = number1 - number2
        break
      case '*':
        result = number1 * number2
        break
      case '/':
        result = number1 / number2
        break
      default:
         console.log('não implementado')
         break
  }
  return result
}
console.log(calculate(5, '+', 6))