const express = require('express')
const router = express.Router()
const Booking = require('../model/bookingSchema')

router.get('/', (req,res) => {
    res.send("Movie")
})

module.exports = router