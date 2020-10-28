const { timeStamp } = require('console')
const mongoose = require ('mongoose')
const { type } = require('os')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('User',userSchema)
    
