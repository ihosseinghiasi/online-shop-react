const Product = require('../../models/product')
const Category = require('../../models/category')
const Card = require('../../models/card')

module.exports.getCategoriesAndProducts = async (req, res, next) => {
  try {
    const categories = await Category.find({})
    const products = await Product.find({})
    if (categories && products) {
      res.json({ products, categories })
    }  
  } catch (err) {
    next(err)
  }
}

module.exports.addCard = async (req, res, next) => {
  try {
    const { card, fieldTitles, fieldValues } = req.body
    let fields = {}
   
      if(fieldValues[0] !== "") {
          fields = Object.fromEntries(
            fieldTitles[0].map((fieldName, index) => [`field${[index]}`, 
                  {"fieldName": fieldName, "fieldValue": fieldValues[index]}
            ])
        )
      }

      const data = {
        cardCategory: card.categoryCard,
        cardProduct: card.productCard,
        cardStatus: card.cardStatus,
        cardFields: fields
      }

    const newCard = await Card.create(data)
    if (newCard) {
      res.json({status: "Ok"})
    }  
                        
  } catch (err) {
    next(err)
  }
}

module.exports.allCards = async (req, res, next) => {
  try {
    const cards = await Card.find({})
    if (cards) { res.json({ cards })}
  } catch (err) {
    next(err)
  }
}