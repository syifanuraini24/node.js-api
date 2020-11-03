const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
require('dotenv').config()

const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')


const app = express()
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err) return console.log(err)
    console.log("Mongodb is running")
});

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// app.use('/',(req, res)=>{
//     return res.json("Hello word")
// })

app.use('/api',authRoute, productRoute)
const server = app.listen(process.env.PORT|| 3000, (err)=>{
    if(err) return console.log(err)
    console.log(`Server is running on port ${server.address().port}`)
})