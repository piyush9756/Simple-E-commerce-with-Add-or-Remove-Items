const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    isAdmin: Boolean
});

//creating a signup method

userSchema.statics.signup = async function (email,password,displayName){
    if(!email || !password || !displayName){
        throw Error("All field must be filled");
    }
    if(!validator.isEmail(email)){
        throw Error("You must enter a correct email");
    }
    if(!validator.isStrongPassword){
        throw Error("Enter a  strong password")
    }
    const exists = await this.findOne({email});
    if(exists){
        throw Error("email already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({
        email:email,
        password:hash,
        displayName:displayName,
        isAdmin:false
    });
    return user;
}

// creating a login method

userSchema.statics.login = async function (email,password){
    if(!email || !password){
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error("Enter a valid email")
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
        throw Error("Enter a valid password");
    }
    return user;
}

module.exports = new mongoose.model("user",userSchema);