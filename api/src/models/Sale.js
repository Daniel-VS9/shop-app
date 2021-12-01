const { Schema, model } = require('mongoose')

const Sale = new Schema({
    products: {
        type: [String],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    totalAfterDiscount: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        default: true
    }
})

module.exports = model('Sale', Sale)