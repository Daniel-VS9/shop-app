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
        type: Number
    },
    description: String,
    imagePath: {
        type: String,
        default: ''
    },
    SupplierCode: {
        type: String,
        default: 'Libre'
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
