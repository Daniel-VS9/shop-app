const express = require('express');
const { authorizeToken } = require('../middlewares/auth.mw');
const router = express.Router()

const Supplier = require('../models/Supplier')

router.get('/all', authorizeToken, async (req, res) => {

    try {
        const suppliers = await Supplier.find({});
        return res.json(suppliers)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: true})
    }
})

module.exports = router;