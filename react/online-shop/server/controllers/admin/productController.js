const Product = require('../../models/product')

module.exports.addProduct = async (req, res, next) => {
  try {
    const { productName, title, categoryTitle, cycle, price, description, accessible, fields } = req.body
    const image = req.file.filename
    const data = {
      productName, title,
      categoryTitle, cycle,
      price, description,
      accessible, fields, image
    } 
    data.fields = fields.split(',')
    const product = await Product.create(data)
    if (product) res.json({ status: "Ok" })
  
  } catch (err) {
    next(err)
  }
}

module.exports.allProducts = async (req, res, next) => {
  try {
    const products = await Product.find({})
    if (products) {
      res.json({products})
    }  
  } catch (err) {
    next(err)
  }
}

module.exports.showProduct = async (req, res, next) => {
  try {
    const id = req.body.id
    const product = await Product.findById({ _id: id })
    if (product) res.json({ product })
  
  } catch (err) {
    next(err)    
  }
}

module.exports.updateProduct = async (req, res, next) => {
  try {
    const newCategoryImage = req.file
    const { productName, title, description, id, image, price, accessible, cycle, fields } = req.body
    const data = {
      productName,
      title,
      description,
      image,
      price,
      accessible,
      cycle,
      fields
    }
    if (newCategoryImage !== undefined) {
      data.image = req.file.filename
    } 
    data.fields = fields.split(',')

    const productUpdated = await Product.updateOne({_id: id }, { $set: data })
    if(productUpdated) {
      res.json({ status: "OK" })
    }
  } catch (err) {
    next(err)
  }
}

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.body.id
    const deletedProduct = await Product.deleteOne({ _id: id })
    if (deletedProduct) res.json({ status: "Ok" })  
  } catch (err) {
    next(err)
  }
}