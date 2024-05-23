const router = require('express').Router()
const { addUser } = require('../../../../controllers/admin/userController')

router.post('/addUser', addUser)

module.exports = router