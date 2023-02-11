const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating : {
        type : Number,
        default : false
    }
})

module.exports = mongoose.model('Rating',ratingSchema)