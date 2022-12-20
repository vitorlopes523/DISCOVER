const express = require('express')

const app = express()

app.listen('3000')

//DELETE
app.route('/:identificador').delete((req, res) => {
  res.send(req.params.identificador)
})

//PUT
//middleware
// app.use(express.json())

// let author = "Vitor"

// app.route('/').get((req, res) => res.send(author))

// app.route('/').put((req, res) => {
//   author = req.body.author
//   res.send(author)
// })

//POST
//middleware
// app.use(express.json())

// app.route('/').post((req, res) => res.send(req.body))

//GET
// app.route('/').get((req, res) => res.send("hello"))
// app.route('/sobre').get((req, res) => res.send("Vitor Lopes de Matos, 23 anos, 1.69 de altura"))