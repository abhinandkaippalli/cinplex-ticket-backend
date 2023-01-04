const express = require('express')
const router = express.Router()
const Booking = require('../model/bookingSchema')

router.get('/', async(req,res) => {
    try {
        const bookings = await Booking.find()
        res.json(bookings)
    } catch(err) {
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
        const booking = new Booking({
            name: req.body.name,
            phn_number: req.body.phn_number,
            email : req.body.email,
            seatsSelected : req.body.seatsSelected
        }) 
    try {
        const a1 = await booking.save()
        res.json(a1)
    } catch(err) {
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try {
        const bookings = await Booking.find()
        res.json(bookings)
    } catch(err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const bookings = await Booking.findById(req.params.id)
        const a1 = await bookings.remove()
        res.json(a1)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch('/:id', async(req,res) => {
    try {
        const bookings = await Booking.findById(req.params.id)
        bookings.seatsSelected = req.body.seatsSelected
        const a1 = await bookings.save()
        res.json(a1)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router