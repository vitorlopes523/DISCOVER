// If...else

 let temperatura = 37.3

if (temperatura >= 37.5) {
    console.log('febre alta')
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log('febre moderada')
} else {
    console.log('saudável')
}

//outra maneira de fazer
let temperature = 37.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('febre alta')
} else if (mediumTemperature) {
  console.log('febre moderada')
} else {
  console.log('saudável')
}


