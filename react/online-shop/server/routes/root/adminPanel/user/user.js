const router = require('express').Router()
const { addUser, allUsers, showUser, updateUser, deleteUser } = require('../../../../controllers/admin/userController')

router.post('/addUser', addUser)
router.get('/allUsers', allUsers)
router.post('/showUser', showUser)
router.put("/updateUser/:id", updateUser);
router.delete('/deleteUser/:id', deleteUser)

module.exports = router