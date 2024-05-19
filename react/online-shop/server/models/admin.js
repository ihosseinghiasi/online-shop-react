const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    department: {type: String},
    isAdmin: {type: String, default: "off"},
    isProduct: {type: String, default: "off"},
    isCard: {type: String, default: "off"},
    isEmail: {type: String, default: "off"},
    isReport: {type: String, default: "off"},
    isTicket: {type: String, default: "off"},
    isCategory: {type: String, default: "off"},
    isUser: {type: String, default: "off"},
    isPayment: {type: String, default: "off"},
})

module.exports = mongoose.model('Admin',adminSchema,'Admin')