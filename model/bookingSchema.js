const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Name is required"]
    },
    phn_number : {
        type: String,
        required: [true, "Phone number is required"]
    },
    email : {
        type: String,
        required: [true, "Email is required"]
    },
    seatsSelected : {
        type: [{
            required: true,
            type: Number
        }]
    }
})

module.exports = mongoose.model('Booking',bookingSchema)