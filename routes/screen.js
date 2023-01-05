const express = require('express')
const router = express.Router()
const Screen = require('../model/screenSchema')

router.get('/', async (req, res) => {
    try {
        const screen = await Screen.find()
        res.json(screen)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.post('/', async (req, res) => {
    const addScreen = new Screen({
        screen : req.body.screen
    })
    try {
        const a4 = await addScreen.save()
        res.json(a4)
    } catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router