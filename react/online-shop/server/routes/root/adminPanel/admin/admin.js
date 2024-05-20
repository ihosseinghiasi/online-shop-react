const { newAdmin } = require('../../../../controllers/admin/adminController')
const router = require('express').Router()

router.post('/newAdmin', newAdmin)


module.exports = router