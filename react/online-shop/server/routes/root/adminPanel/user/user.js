const router = require('express').Router()
const { addUser, allUsers, showUser, updateUser, deleteUser } = require('../../../../controllers/admin/userController')

router.post('/addUser', addUser)
router.get('/allUsers', allUsers)
router.post('/showUser', showUser)
router.post('/updateUser', updateUser)
router.post('/deleteUser', deleteUser)

module.exports = router