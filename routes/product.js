const express = require ('express')
const route = express.Router()

const {createProduct} = require('../controllers/product')

route
.post('/addproduct', createProduct)

module.exports = route