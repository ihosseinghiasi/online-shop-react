const categoryController = require("../../../../controllers/admin/categoryController")
const router = require('express').Router()
const upload = require("../../../../upload/upload")

router.post('/addCategory', upload.single('file'), (req, res, next) => {
  if(!req.file) {
    req.body.image = null
  }else {
    req.body.image = req.file.filename
  }
  next()
}, categoryController.newCategory)

router.get('/allCategories', categoryController.allCategories)
router.post('/showCategory', categoryController.showCategory)
router.post('/updateCategory', upload.single('file'), categoryController.updateCategory)
router.post('/deleteCategory', categoryController.deleteCategory)
router.post('/category', categoryController.category)

module.exports = router