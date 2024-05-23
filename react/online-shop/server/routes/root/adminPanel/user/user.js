const router = require('express').Router()
const { addUser, allUsers } = require('../../../../controllers/admin/userController')

router.post('/addUser', addUser)
router.get('/allUsers', allUsers)

module.exports = router