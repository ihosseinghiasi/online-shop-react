const { newAdmin, allAdmins, showAdmin, updateAdmin, deleteAdmin } = require('../../../../controllers/admin/adminController')
const router = require('express').Router()

router.post('/newAdmin', newAdmin)
router.get('/allAdmins', allAdmins)
router.post('/showAdmin', showAdmin)
router.put('/updateAdmin/:id', updateAdmin)
router.delete('/deleteAdmin/:id', deleteAdmin)

module.exports = router