require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// TODO add bcrypt

const authenticate = async (req, res, next) => {
    const { email, pass } = req.body;

    if (!email || !pass)
        return res.status(400).json({ error: 'Email o clave invalidos' });

    try {
        const user = await User.findOne({ email });
        if (!user || user.pass != pass) return res.status(401).json({ error: 'Email o clave incorrectos' });
        req.userData = { _id: user._id, username: user.username}
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const authorizeToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.status(401).json({error: 'El usuario no esta autenticado'})

    try {
        const result = jwt.verify(token, process.env.SECRET_JWT)
        req.userData = result;
        next()
    } catch (error) {
        return res.sendStatus(403)
    }
}

const createToken = (req, res, next) => {
    const { _id, username } = req.userData;

    if (!_id || !username) return res.status(400).json({ error: 'Email o clave invalidos' });

    const token = jwt.sign(
        { _id, username }, 
        process.env.SECRET_JWT, 
        { expiresIn: '24h', }
    );

    req.token = token;
    next();
};


module.exports = { authenticate, createToken, authorizeToken }