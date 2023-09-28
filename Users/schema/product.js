const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
        trim:true //will delete white space
    },
    price:{
        type:Number,
    },
    brand:{
        type:String,
    },
    category:{
        type:String,
    }
})


const productModel = new mongoose.model("saman", productSchema)
module.exports = productModel;