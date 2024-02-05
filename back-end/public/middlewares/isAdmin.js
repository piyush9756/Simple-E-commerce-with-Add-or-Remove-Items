const jwt =require("jsonwebtoken");
const User = require("../schemas/userSchema");



const isAdminMiddleWare = async(req,res,next)=>{
    //verify the authentication
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"Authorization token required"});
    }
    const token = authorization && authorization.split(" ")[1];
    
    try{
        const {_id} =  jwt.verify(token,process.env.TOKEN_SECRET);
        if(_id.isAdmin){
        req.user = await User.findOne({_id:_id._id}).select("_id");
        next();
        }else{
             throw Error("You are not an admin");
        }
    }catch(err){
        res.status(401).json({error:err.message});
    }
}

module.exports = isAdminMiddleWare;