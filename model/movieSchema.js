const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Movie',movieSchema)