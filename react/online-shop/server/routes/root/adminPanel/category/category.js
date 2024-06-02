const categoryController = require("../../../../controllers/category/categoryController")
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

module.exports = router