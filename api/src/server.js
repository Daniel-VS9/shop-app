require('dotenv').config();
require('./database/mongo');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/user', require('./routes/users'));
app.use('/product', require('./routes/products'));
app.use('/supplier', require('./routes/suppliers'));
app.use('/sale', require('./routes/sales'));

app.listen(PORT, () => console.log(`Backend server running in port ${PORT}`));
