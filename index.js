// Modules
const express = require('express')
const app = express()
const nocache = require('nocache')
const config = require("./config")
// Config
app.use(nocache())

// Routes
app.get('/', function (req, res) {
    res.status(200).send("Hello World")
  })

app.get('/users', function (req, res) {
    res.status(300).send("Hello Users")
  })

  app.get('/users/:id', function (req, res) {
    const id = req.params.id
    id == 1 ? res.status(300).send(`Hello Users ${req.params.id}`) : res.status(500).send("Ocurrio un error")
  })

  app.get('/category', function (req, res) {
    res.status(400).send("World Category")
  })

//Server
app.listen(config.port, () => {
    console.log("Servidor Iniciado");
});