const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema ({
    image : {
        type : String,
        required : true
    },
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
    about : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Movie',movieSchema)