const mongoose = require('mongoose')

const screenSchema = new mongoose.Schema ({
    screen : {
        type : String,
        format : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model('Screen',screenSchema)