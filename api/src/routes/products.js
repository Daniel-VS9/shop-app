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
        const product = await Product.findOne({_id: productId, user_id: userId});
        return res.json(product)
    } catch (error) {
        console.log(error)
        return res.json({error: true})
    }
})

router.get('/bysupplier/:supplierName', authorizeToken, async(req, res) => {
    const {_id: userId} = req.userData;
    const {supplierName} = req.params;

    try {
        let products;

        if(supplierName === 'all') {
            products = await Product.find({user_id: userId})
        } else {
            products = await Product.find({user_id: userId, supplierCode: supplierName})
        }

        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: true})
    }
})

module.exports = router;
