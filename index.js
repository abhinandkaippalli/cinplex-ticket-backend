const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:3000/cineplex-ticket',{useNewUrlParser: true})

var bodyParser = require('body-parser')
const cors = require('cors')
const { SeatModel } = require('./seatModel.js');
const { BookingModel } = require('./bookingModel.js');
const { json } = require('express')
const booking = new BookingModel();
const model = new SeatModel();
const app = express()
const port = 3000
let errorMessage

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/seats', (req, res) => {
  res.json(model.getData())
})

app.get('/booking', (req, res) => {
  console.log("hi");
  console.log(booking.getBooking());
  res.json(booking.getBooking())
})

app.post('/booking', (req, res) => {
  //console.log(req.body.bodydata);
  let isValid = true
  console.log(req.body);
  if (req.body.name === '' || req.body.name == null) {
    isValid = false
    console.log('Name is required!');
  }
  
  if (req.body.phn_number?.length < 10 || req.body.phn_number == null) {
    isValid = false
    console.log(' must be atleast 10 digits!');
  }
  console.log(req.body.phn_number?.length);

  if (req.body.email === '' || req.body.email == null) {
    isValid = false
    console.log('Email must be required!');
  }

  if (req.body.seatsSelected?.length === '' || req.body.seatsSelected == null) {
    isValid = false
    console.log('No seats selected!');
  }

  if (req.body.seatsSelected) {
    for (i = 0; i < req.body.seatsSelected; i++) {
      let selectedSeat = req.body.seatsSelected[i];
      if (model.getData(selectedSeat)) {
        isValid = false
        console.log('seats selected are already selected');
      }
    }
  }
  if (isValid) {
    console.log('isvalid', isValid)
    const result = booking.setBooking(req.body)
    for (i = 0; i < req.body.seatsSelected.length; i++) {
      model.bookSeats(req.body.seatsSelected[i])
    }     
    res.json(req.body)
  } else {
    res.status(400).send(errorMessage)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${3000}`)
})