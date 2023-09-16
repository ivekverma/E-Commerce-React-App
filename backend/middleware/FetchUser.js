const jwt=require('jsonwebtoken');
const secret="vivekstoreforelectronicitem";

const fetchUser=(req,res,next)=>{
    const token=req.header('auth_token');
    console.log(token);
    if(!token){
        return res.status(400).json({error:"please enter your token"});
    }
    try{
        const data= jwt.verify(token,secret);
        req.user=data.user;
        next();
    }
    catch(error){
        console.error(error.message);
        res.status(400).json({error:"please neter valid token"})
    }
    
}

module.exports=fetchUser;