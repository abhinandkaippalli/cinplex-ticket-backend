const express = require('express')
const router = express.Router()
const Screening = require('../model/screeningSchema')

router.get('/', async (req, res) => {
    try {
        const screen = await Screening.find()
        res.json(screen)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

router.post('/', async (req, res) => {
    const addScreen = new Screening({
        movie: req.body.movie,
        screen: req.body.screen,
        time: req.body.time,
    })
    try {
        const a2 = await addScreen.save()
        res.json(a2)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get('/:id', async(req,res) => {
    try {
        const screen = await Screening.findById(req.params.id)
        res.json(screen)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const screen = await Screening.findById(req.params.id)
        const a3 = await screen.remove()
        res.json(a3)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

router.patch('/:id', async(req,res) => {
    try {
       const screen = await Screening.findById(req.params.id)
       screen.screen = req.body.screen
       screen.time = req.body.time
       screen.status = req.body.status
       const a3 = await screen.save()
       res.json(a3)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router