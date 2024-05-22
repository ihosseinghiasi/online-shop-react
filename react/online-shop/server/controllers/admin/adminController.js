const Admin = require('../../models/admin')
const bcript = require('bcrypt')

module.exports.newAdmin = async (req, res, next) => {
    try {
        const { firstName, lastName, 
                email, password, department,
                isAdmin, isUser, 
                isCategory, isCard,
                isReport, isProduct,
                isTicket, isPayment, isEmail } = req.body

            const data = {
                firstName, lastName,
                email, password, department,
                isAdmin, isUser, 
                isCategory, isCard,
                isReport, isProduct,
                isTicket, isPayment, isEmail
            }

            const salt = await bcript.genSalt()
            data.password = await bcript.hash(data.password, salt)
            await Admin.create(data)
        } catch (err) {
        
    }
}

module.exports.allAdmins = async (req, res, next) => {
   try {
        const admins = await Admin.find()
        return res.json({ admins })
   } catch (err) {
    
   }
}

module.exports.showAdmin = async (req, res, next) => {
    try {
        const paramId = req.body.id
        const admin = await Admin.findOne({ _id: paramId })
        res.send({ admin })
    } catch (err) {
        
    }
}

module.exports.updateAdmin = async (req, res, next) => {
    try {
        const { _id, firstName, lastName, 
            email, password, department,
            isAdmin, isUser, 
            isCategory, isCard,
            isReport, isProduct,
            isTicket, isPayment, isEmail } = req.body

        const data = {
            firstName, lastName,
            email, password, department,
            isAdmin, isUser, 
            isCategory, isCard,
            isReport, isProduct,
            isTicket, isPayment, isEmail
        }

        const salt = await bcript.genSalt()
        data.password = await bcript.hash(data.password, salt)
        await Admin.updateOne({ _id: _id }, { $set: data })
    } catch (err) {
        
    }
}