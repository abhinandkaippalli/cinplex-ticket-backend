const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://abhinandkaipppalli:Abhinand1236@cluster0.xv2tyj2.mongodb.net/Data'
const app = express()

mongoose.set('strictQuery', false);
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
const cors = require('cors')
con.on('open', () => {
  console.log('connected...');
})

app.use(cors())
app.use(express.json())

const bookingRouter = require('./routes/booking')
app.use('/booking',bookingRouter)

const movieRouter = require('./routes/movie')
app.use('/movie',movieRouter)

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})