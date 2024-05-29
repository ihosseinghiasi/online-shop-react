const router = require('express').Router()

router.use('/', require('./authentication/authentication'))
router.use('/persianDate', require('./persianDate'))
router.use('/adminPanel', require('./adminPanel/adminPanel'))

module.exports = router