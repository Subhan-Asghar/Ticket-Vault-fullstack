const express = require('express')
const mongoose = require('mongoose');
const cors=require('cors')
const router=require('./routes/ticket_routes')
const app = express()
const port = 3000

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//CORS
app.use(cors())

//Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ticket')
  .then(() => console.log('Connected!'));

//Routes
app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})