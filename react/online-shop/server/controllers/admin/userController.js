const User = require('../../models/user')
const bcrypt = require('bcrypt')

module.exports.addUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body
        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        }
        const salt = await bcrypt.genSalt()
        data.password = await bcrypt.hash(data.password, salt)
        const user = await User.create(data)
        if (user) {
            return res.json({status: "ok"})
        }
    } catch (err) {
        next(err)
    }
}

module.exports.allUsers = async (req, res, next) => {
    try {

        const users = await User.find({})
        return res.json({users})

    } catch (err) {
        next(err)
    }
}

module.exports.showUser = async (req, res, next) => {
    try {
        const paramId = req.body.id
        const user = await User.findOne({ _id: paramId })
        res.send({ user })
    } catch (err) {
        next(err)
    }
}

module.exports.updateUser = async (req, res, next) => {
    try {
        const { _id, firstName, lastName, 
            email, password, phoneNumber } = req.body

        const data = {
            firstName, lastName,
            email, password, phoneNumber,
        }

        const salt = await bcrypt.genSalt()
        data.password = await bcrypt.hash(data.password, salt)
        const updatedUser = await User.updateOne({ _id: _id }, { $set: data })
        if(updatedUser.acknowledged) {
            return res.json({ status: "ok" })
        }
    } catch (err) {
        next(err)
    }
}