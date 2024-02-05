require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./public/schemas/productSchema");
const cors = require("cors");
const User = require("./public/schemas/userSchema");
const { signupUser ,loginUser} = require("./public/controllers/userController");
const auth = require("./public/middlewares/auth");
const jwt = require("jsonwebtoken");
const isAdminAuth = require("./public/middlewares/isAdmin");




const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
/* app.use(auth); */


mongoose.connect("mongodb://localhost:27017/e-commerce");



//full products
app.route("/api/products")
.get(async(req,res)=>{
  const products = await Product.find();
  res.send(products);
})


//single product

app.route("/api/products/:productId")
.get(async(req,res)=>{
  const productId = req.params.productId;
  try{
  const product = await Product.findOne({_id:productId});
  if (!product) {return res.status(404).send("Product not found");}
    res.send(product);
  }
  catch(err){
    console.error(err);
    
  }
})
/* .post(isAdminMiddleWare,async(req,res)=>{
  const {title,price,description,category,image,sizes} = req.body;
 const product = new Product({
  title: title,
  price: price,
  description: description,
  category: category,
  image: image,
  sizes: sizes
 })
 const saved = await product.save();
 console.log(saved);
}) */

// login api 
app.post("/api/user/login",loginUser);


// signup api
app.post("/api/user/signup",signupUser);




//testing api
app.post("/api/test",isAdminAuth,async(req,res)=>{
  const {title,price,description,category,image,sizes} = req.body;
  try{
    if(!title || !price || !description|| !category || !image || !sizes){
     throw Error("All fields must be filled");
  }
  const product = new Product({
   title: title,
   price: price,
   description: description,
   category: category,
   image: image,
   sizes: sizes
  })
  const saved = await product.save();
  res.status(200).json(saved);
  }catch(err){
    res.status(400).json({error :err.message});
  }
})
/* app.route("/api/user/cart")
.post(auth,async(req,res)=>{
  const userId = req.user;
  console.log(userId);
}) */


app.listen(port,()=>{
    console.log("server started on port:",port);
})