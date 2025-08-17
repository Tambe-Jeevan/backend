// import express from "express";
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jeevan', (request, response) => {
    response.send("<h1>Hello I am Jeevan Tambe</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})