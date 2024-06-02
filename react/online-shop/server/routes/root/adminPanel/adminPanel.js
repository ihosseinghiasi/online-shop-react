const router = require('express').Router()

router.use('/admin', require('./admin/admin'))
router.use('/user', require('./user/user'))
router.use('/category', require('./category/category'))

module.exports = router