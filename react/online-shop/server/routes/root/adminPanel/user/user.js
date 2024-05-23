const router = require('express').Router()
const { addUser, allUsers, showUser, updateUser } = require('../../../../controllers/admin/userController')

router.post('/addUser', addUser)
router.get('/allUsers', allUsers)
router.post('/showUser', showUser)
router.post('/updateUser', updateUser)

module.exports = router