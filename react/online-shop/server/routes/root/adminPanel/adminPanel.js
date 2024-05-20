const router = require('express').Router()

router.use('/admin', require('./admin/admin'))

module.exports = router