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
const isAdminMiddleWare = require("./public/middlewares/isAdmin");




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
  const product = await Product.findOne({id:productId});
  if (!product) {
    return res.status(404).send("Product not found");}
    res.send(product);
  }
  catch(err){
    console.error(err);
    
  }
})

// login api 
app.post("/api/user/login",loginUser);


// signup api
app.post("/api/user/signup",signupUser);




//testing api
app.post("/api/test",isAdminMiddleWare,async(req,res)=>{

  res.send("authed");
})
/* app.route("/api/user/cart")
.post(auth,async(req,res)=>{
  const userId = req.user;
  console.log(userId);
}) */


app.listen(port,()=>{
    console.log("server started on port:",port);
})