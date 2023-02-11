const express = require('express')
const router = express.Router()
const Rating = require('../model/ratingSchema')

router.post('/', async(req,res) => {
    const addRating = new Rating({
        rating : req.body.rating
    }) 
    try {
        const a5 = await addRating.save()
        res.json(a5)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get('/', async(req,res) => {
    try {
        const rating = await Rating.find()
        res.json(rating)
    }catch (err) {
        res.send("Error" + err)
    }
})

router.put('/:id', async(req,res) => {
    try {
        const rating = await Rating.findById(req.params.id)
        rating.rating = req.body.rating
        const a5 = await rating.save()
        res.json(a5)
    } catch (err) {
        res.send("Error" + err)
    }
}) 

module.exports = router