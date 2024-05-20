const router = require('express').Router()

router.use('/', require('./authentication/authentication'))
router.use('/adminPanel', require('./adminPanel/adminPanel'))

module.exports = router