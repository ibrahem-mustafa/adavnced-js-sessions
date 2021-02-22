const jwt = require('jsonwebtoken')
const {JWT_PASSWORD} = require('../../config/secret') 

function ValidateToken(req, res, next) {
    
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer [token]
        const user = jwt.verify(token, JWT_PASSWORD);
        req.user = user;
        next()
    } catch (err) { 
        console.log(err)
        res.status(403).json({msg: 'Invalid user Token'})
    }
}

module.exports = ValidateToken