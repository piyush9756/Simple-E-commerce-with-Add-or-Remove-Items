const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    id:Number,
    image:{
        type:String,
        required:true
    },
    price:Number,
    rating:{
        rate:Number,
        count:Number
    },
    title:{
        type:String,
        required:true
    },
    sizes: Array

})

module.exports = new mongoose.model("product",productSchema);