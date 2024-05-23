const { newAdmin, allAdmins, showAdmin, updateAdmin, deleteAdmin } = require('../../../../controllers/admin/adminController')
const router = require('express').Router()

router.post('/newAdmin', newAdmin)
router.get('/allAdmins', allAdmins)
router.post('/showAdmin', showAdmin)
router.post('/updateAdmin', updateAdmin)
router.post('/deleteAdmin', deleteAdmin)

module.exports = router