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
            const newAdmin = await Admin.create(data)
            if(newAdmin) {
                return res.json({status: "OK"})
            }
            
        } catch (err) {
        next(err)
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
        next(err)
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
        const updatedAdmin = await Admin.updateOne({ _id: _id }, { $set: data })
        if(updatedAdmin.acknowledged) {
            return res.json({ status: "OK" })
        }
    } catch (err) {
        next(err)
    }
}

module.exports.deleteAdmin = async (req, res, next) => {
    try {
        const {adminId} = req.body
        const deleteAdmin = await Admin.findByIdAndDelete({ _id: adminId })
        console.log(deleteAdmin)
        if(deleteAdmin) {
            return res.json({ status: "OK" })
        }
    } catch (err) {
        
    }
}