const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')

router.get('/',async(req,res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.post('/',async(req,res) => {
    const addUser = new User({
        profile : req.body.profile,
        email : req.body.email,
        mobileNumber : req.body.mobileNumber,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        birthday : req.body.birthday,
        identity : req.body.identity,
        married : req.body.married,
        areaPincode : req.body.areaPincode,
        addressLineOne : req.body.addressLineOne,
        addressLineTwo : req.body.addressLineTwo,
        landMark : req.body.landMark,
        city : req.body.city,
        state : req.body.state
    })
    try {
        const a2 = await addUser.save()
        res.json(a2)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.get('/:id', async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send("Error" + err)
    }
})

router.put('/:id', async(req,res) => {
    try {
        const user = await User.findById(req.params.id)
        user.profile = req.body.profile,
        user.email = req.body.email,
        user.mobileNumber = req.body.mobileNumber,
        user.firstName = req.body.firstName,
        user.lastName = req.body.lastName,
        user.birthday = req.body.birthday,
        user.identity = req.body.identity,
        user.married = req.body.married,
        user.areaPincode = req.body.areaPincode,
        user.addressLineOne = req.body.addressLineOne,
        user.addressLineTwo = req.body.addressLineTwo,
        user.landMark = req.body.landMark,
        user.city = req.body.city,
        user.state = req.body.state
        const a3 = await user.save()
        res.json(a3)
    }
    catch (err) {
        res.send("Error" + err)
    }
})

module.exports = router