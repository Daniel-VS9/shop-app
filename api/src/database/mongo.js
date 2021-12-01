require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB connected succesfully');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

const db = mongoose.connection;

module.exports = db;
