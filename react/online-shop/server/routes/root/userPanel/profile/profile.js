const router = require('express').Router()
const ProfileController = require('../../../../controllers/user/profile')

router.put('/:id', ProfileController.profile)

module.exports = router