const router = require("express").Router()
const productController = require('../../../../controllers/admin/productController')
const upload = require("../../../../upload/upload")

router.post('/addProduct', upload.single('file'), (req, res, next) => {
  if(!req.file) {
    req.body.image = null
  }else {
    req.body.image = req.file.filename
  }
  next()
}, productController.addProduct)

router.get('/allProducts', productController.allProducts)
router.post('/showProduct', productController.showProduct)
router.post('/updateProduct', upload.single('file'), productController.updateProduct)


module.exports = router