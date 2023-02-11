const express = require('express')
const router = express.Router()
const Movie = require('../model/movieSchema')

router.get('/', async (req, res) => {
    try {
        const movieList = await Movie.find()
        res.json(movieList)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

router.post('/', async (req, res) => {
    const addMovie = new Movie({
        image : req.body.image,
        name: req.body.name,
        director: req.body.director,
        duration: req.body.duration,
        about: req.body.about,
        type: req.body.type
    })
    try {
        const a2 = await addMovie.save()
        res.json(a2)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const movieList = await Movie.findById(req.params.id)
        res.json(movieList)
    }
    catch(err) {
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const movieList = await Movie.findById(req.params.id)
        const a2 = await movieList.remove()
        res.json(a2)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const movieList = await Movie.findById(req.params.id) 
        movieList.type = req.body.type
        const a2 = await movieList.save()
        res.json(a2)   
    }catch(err){
        res.send('Error')
    }
})

module.exports = router