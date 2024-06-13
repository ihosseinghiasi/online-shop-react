const router = require('express').Router()
const cardController = require('../../../../controllers/admin/cardController')

router.get('/getCategoriesAndProducts', cardController.getCategoriesAndProducts)
router.post('/addCard', cardController.addCard)

module.exports = router