const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");

//creating the token function
const createToken = (_id)=>{
    return jwt.sign(
        {_id},
        process.env.TOKEN_SECRET,
        {expiresIn:"1d"})
 }
 

//login users function controller



const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    
    try{
       const user = await User.login(email,password);
       const displayName = user.displayName;
       const isAdmin = user.isAdmin;
       //create a token 
       const token = createToken({_id:user._id,isAdmin:user.isAdmin});
       res.status(200).json({email,token,displayName,isAdmin});
    }catch(err){
        res.status(400).json({error :err.message});
    }
}

const signupUser = async(req,res)=>{
    const {email,password,displayName} = req.body;
    try{
        const user = await User.signup(email,password,displayName);
        //create the token
        const token = createToken({_id:user._id,isAdmin:user.isAdmin});
        res.status(200).json({email,token,displayName});

    }catch(err){
        res.status(400).json({error :err.message});
    }
}   

module.exports = {signupUser, loginUser};