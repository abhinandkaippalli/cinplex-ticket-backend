const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema ({
   
    profile : {
        type : String,
        default : false
    },

    email : {
        type : String,
        required : true
    },
    
    mobileNumber : {
        type : Number,
        required : true
    },

    firstName : {
        type : String,
        required : true
    },     

    lastName : {
        type : String,
        required : true
    },

    birthday : {
        type : Date,
        default : false
    },

    identity : {
        type : String,
        default : false
    },

    married : {
        type : String,
        default : false
    },

    areaPincode : {
        type : Number,
        default : false
    },

    addressLineOne : {
        type : String,
        default : false
    },

    addressLineTwo : {
        type : String,
        default : false
    },

    landMark : {
        type : String,
        default : false
    },

    city : {
        type : String,
        default : false
    },

    state : {
        type : String,
        default : false
    }
 })

 module.exports = mongoose.model('user',userSchema)