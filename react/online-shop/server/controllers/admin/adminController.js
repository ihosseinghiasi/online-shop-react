const Admin = require('../../models/admin')
const bcript = require('bcrypt')

module.exports.newAdmin = async (req, res, next) => {
    try {
        const { firstName, lastName, 
                email, password,
                isAdmin, isUser, 
                isCategory, isCard,
                isReport, isProduct,
                isTicket, isPayment, isEmail } = req.body

            const data = {
                firstName, lastName,
                email, password,
                isAdmin, isUser, 
                isCategory, isCard,
                isReport, isProduct,
                isTicket, isPayment, isEmail
            }

            const salt = await bcript.genSalt()
            data.password = await bcript.hash(data.password, salt)
            const newAdmin = await Admin.create(data)
            console.log(newAdmin)
        } catch (err) {
        
    }
}