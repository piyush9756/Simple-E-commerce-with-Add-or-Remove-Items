const jwt =require("jsonwebtoken");
const User = require("../schemas/userSchema");



const auth = async(req,res,next)=>{
    //verify the authentication
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"Authorization token required"});
    }
    const token = authorization && authorization.split(" ")[1];
    try{
        const {_id} =  jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = await User.findOne({_id}).select("_id");
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({error:"request is not authorized"});
    }
}

module.exports = auth;