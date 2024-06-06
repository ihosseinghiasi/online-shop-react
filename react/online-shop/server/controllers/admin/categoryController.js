const { json } = require('react-router-dom')
const Category = require('../../models/category')

module.exports.newCategory = async (req, res, next) => {
    try {

      const image = req.file.filename
      const { title, description, categoryName } = req.body
      const data = {
        categoryName,
        title,
        description,
        image
      }
      const newCategory = await Category.create(data)
      if(newCategory) {
        res.json({ status: "ok" })
      }
    } catch (err) {
      next(err)
    }
  }

  module.exports.allCategories = async (req, res, next) => {
    try {

        const categories = await Category.find({})
        return res.json({ categories })

    } catch (err) {
        next(err)
    }
}

module.exports.showCategory = async (req, res, next) => {
  try {
      const categoryId = req.body.id
      const category = await Category.findOne({ _id: categoryId })
      res.send({ category })
  } catch (err) {
      next(err)
  }
}

module.exports.updateCategory = async (req, res, next) => {
  try {
    const newCategoryImage = req.file
    const { categoryName, title, description, id, image } = req.body
    const data = {
      categoryName,
      title,
      description,
      image
    }
    if (newCategoryImage !== undefined) {
      data.image = req.file.filename
    } 

    const categoryUpdated = await Category.updateOne({_id: id }, { $set: data })
    if(categoryUpdated) {
      res.json({ status: "OK" })
    }
  } catch (err) {
    next(err)
  }
}

