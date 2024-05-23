const User = require('../../models/user')

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
        const user = await User.create(data)
        if (user) {
            return res.json({status: "ok"})
        }
    } catch (err) {
        next(err)
    }
}