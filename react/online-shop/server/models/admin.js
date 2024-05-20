const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    department: {type: String},
    isAdmin: {type: String},
    isProduct: {type: String},
    isCard: {type: String},
    isEmail: {type: String},
    isReport: {type: String},
    isTicket: {type: String},
    isCategory: {type: String},
    isUser: {type: String},
    isPayment: {type: String},
})

module.exports = mongoose.model('Admin',adminSchema,'Admin')