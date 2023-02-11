const mongoose = require('mongoose')

const screeningSchema = new mongoose.Schema({
    movie : {
        type : String,
        required : true
    },
    screen : {
        type : Number,
        reaquired : true
    },
    date : {
        type : String,
        format : Date,
        required : true,
    },
    time : {
        type : String,
        format : Date,
        required : true
    }
})

module.exports = mongoose.model('Screening',screeningSchema)
