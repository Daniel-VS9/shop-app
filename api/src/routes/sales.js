const express = require('express');
const { authorizeToken } = require('../middlewares/auth.mw');
const Sale = require('../models/Sale');
const router  = express.Router()

router.get('/all', authorizeToken, async(req, res) => {
    const {_id: user_id} = req.userData;

    try {
        const sales = await Sale.find({user_id});
        res.json(sales)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
})

module.exports = router;
