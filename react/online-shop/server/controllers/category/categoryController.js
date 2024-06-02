const Category = require('../../models/category')

module.exports.newCategory = async (req, res, next) => {
    try {
      const categoryImage = req.file.path.replace(/\\/g, '/').substring(13)
      const { title, description, namak } = req.body
      const data = {
        categoryName: namak,
        title,
        description,
        image: categoryImage
      }
      const newCategory = await Category.create(data)
      console.log(newCategory)
      // console.log(req.file)
      // console.log(req.body)
    } catch (err) {
      next(err)
    }
  }

