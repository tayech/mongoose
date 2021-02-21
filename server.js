const express = require('express')
const connectDB = require('./config/connectdb')
const app = express()



connectDB();


const port = 5000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})