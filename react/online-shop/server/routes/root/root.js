const router = require('express').Router()

router.use('/', require('./authentication/authentication'))
router.use('/adminPanel', require('./adminPanel/adminPanel'))
router.use('/persianDate', require('./persianDate'))

module.exports = router