const { verifyCodeSms, confirmVerifyCodeSms, register } = require('../../controllers/authentication/authenticationController')
const router = require('express').Router()
const {checkUser} = require('../../middlewares/checkUserAuthenticate')


router.post('/', checkUser)
router.post('/sms', verifyCodeSms)
router.post('/confirmSms', confirmVerifyCodeSms)
router.post('/register', register)

module.exports = router