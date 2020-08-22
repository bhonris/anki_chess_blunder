const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())


app.get("/test", (req, res) => {
  res.send('Hello World Test');
})

app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})