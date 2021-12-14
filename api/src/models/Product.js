const { Schema, model } = require('mongoose')

const Product = Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    imagePath: {
        type: String,
        default: ''
    },
    supplierCode: {
        type: String,
        default: 'libre'
    },
    stock: {
        type: Number,
        default: 0
    },
    user_id: {
        type: String,
        requried: true
    }
})

module.exports = new model('Product', Product)
