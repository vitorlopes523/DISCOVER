const promessa = new Promise( function(resolve, reject) {
  return resolve('funcionou')
})

async function start() {
  try {
    const result = await promessa
    console.log(result)
  }catch(e) {
    console.log(e)
  }finally {
    console.log('rodar sempre')
  }
}

start()