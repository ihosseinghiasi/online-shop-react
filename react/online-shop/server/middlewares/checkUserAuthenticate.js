const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.comercial
    if (token) {
        jwt.verify(token, "nodejs is program language", async(err, decodedToken) => {
            if(err) {
                res.json({status: false})
                next()
            } else {
                const user = await User.findById(decodedToken.id)
                if(user) {
                    const fullName = user.firstName + " " + user.lastName
                    res.json({status: true, user: fullName})
                } else {
                    res.json({status: false})
                    next()
                }
            }
        })
    } else {
        res.json({status: false})
        next()
    }

} 
