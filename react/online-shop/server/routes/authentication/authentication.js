const { verifyCodeSms, confirmVerifyCodeSms, login, register } = require('../../controllers/authentication/authenticationController')
const router = require('express').Router()
const {checkUser} = require('../../middlewares/checkUserAuthenticate')

router.post('/', checkUser)
router.post('/sms', verifyCodeSms)
router.post('/confirmSms', confirmVerifyCodeSms)
router.post('/login', login)
router.post('/register', register)

module.exports = router