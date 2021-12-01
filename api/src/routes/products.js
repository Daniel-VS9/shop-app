const express = require('express');
const { authorizeToken } = require('../middlewares/auth.mw');
const Product = require('../models/Product');
const router = express.Router()

router.get('/all', authorizeToken, async(req, res) => {
    const {_id: userId} = req.userData;

     try {
        const products = await Product.find({user_id: userId})
        res.json(products)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.get('/:id', authorizeToken, async(req, res) => {
    const {_id: userId} = req.userData;
    const productId = req.params.id

    try{
        const product = await Product.findById(productId);
        return res.json(product)
    } catch (error) {
        console.log(error)
        return res.json({error: true})
    }
})

module.exports = router;
