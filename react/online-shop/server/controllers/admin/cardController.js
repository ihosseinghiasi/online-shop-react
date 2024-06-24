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
    const { card, fieldNames, fieldValues } = req.body
    let fields = {}
   
      if(fieldValues !== "") {
          fields = Object.fromEntries(
            fieldNames.map((fieldName, index) => [`field${[index]}`, 
                  {"fieldName": fieldName, "fieldValue": fieldValues[index]}
            ])
        )
      }

      const data = {
        cardCategory: card.cardCategory,
        cardProduct: card.cardProduct,
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

module.exports.showCard = async (req, res, next) => {
  const id = req.body.id
  const card = await Card.findById({ _id: id })
  if (card) res.json({card})
}

module.exports.updateCard = async (req, res, next) => {
  try {
    const { card, fieldNames, fieldValues } = req.body
    const id = card._id
    let fields = {}
     
    if(fieldValues !== "") {
        fields = Object.fromEntries(
          fieldNames.map((fieldName, index) => [`field${[index]}`, 
                {"fieldName": fieldName, "fieldValue": fieldValues[index]}
          ])
      )
    }
  
    const data = {
      cardCategory: card.cardCategory,
      cardProduct: card.cardProduct,
      cardStatus: card.cardStatus,
      cardFields: fields
    }
  
    const cardUpdated = await Card.updateOne({ _id: id }, { $set: data })
    if ( cardUpdated.acknowledged ) {
      res.json({ status: "Ok" })
    }  
  } catch (err) {
    next(err)
  }
}