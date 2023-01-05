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
    time : {
        type : Date,
        required : true,
    },
    status : {
        type : Boolean,
        default : false,
        required : true,
    }
})

module.exports = mongoose.model('Screening',screeningSchema)