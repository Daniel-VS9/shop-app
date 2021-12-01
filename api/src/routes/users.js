const express = require('express');
const { authenticate, createToken, authorizeToken } = require('../middlewares/auth.mw');
const User = require('../models/User');
const router = express.Router()

router.get('/all', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

router.post('/login', authenticate, createToken, (req, res) => {
    res.json({token: req.token, username: req.userData.username, _id: req.userData._id})
})

router.get('/checkToken', authorizeToken, (req, res) => {
    res.status(200).json({username: req.userData.username, _id: req.userData._id}) // ANCHOR
}) 

module.exports =  router;