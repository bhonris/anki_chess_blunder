const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())


app.post("/test", (req, res) => {
  console.log(req.body)
  res.json({username: req.body.username});
})

app.post("/add", (req, res) => {
  console.log(req.body)
  res.json({sum: req.body.num_one + req.body.num_two});
})

app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})