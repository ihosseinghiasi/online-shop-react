const router = require('express').Router()
const cardController = require('../../../../controllers/admin/cardController')

router.get('/getCategoriesAndProducts', cardController.getCategoriesAndProducts)
router.post('/addCard', cardController.addCard)
router.get('/allCards', cardController.allCards)
router.post('/showCard', cardController.showCard)
router.post('/updateCard', cardController.updateCard)

module.exports = router