const Product = require('../models/product')

exports.createProduct = (req, res)=>{
    const {productName, price, category, quantity, description} = req.body

    Product.findOne({productName}, (err, product)=>{
        if(err) return res.json({message: err})  
        console.log("1234")
        if(product){
            return res.json({message:"Product sudah ada"})
        }
    
        const newProduct = new Product ({
            productName, price, category, quantity, description
        })

        newProduct.save((err, product)=>{
            if(err) return res.json({message: err})
            return res.json ({product})
        })

    })
}