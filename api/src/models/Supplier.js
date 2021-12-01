const { Schema, model } = require('mongoose');

const Supplier = Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        requried: true
    }
});

module.exports = new model('Supplier', Supplier);
