const express=require('express');
const User = require('../models/User');
const router=express.Router();
const {body}=require('express-validator')
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const secret="vivekstoreforelectronicitem"
const fetchUser=require('../middleware/FetchUser')

router.post('/addUser',[
    body("name"),
    body("contact"),
    body("email"),
    body("password"),

],async (req,res)=>{
    let success=false; 
    const salt=await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt);
    const user=await User.create({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        password:secPassword,
    })
    const data={
        user:{
            id:user.id
        }
    }
    success=true;
    const jwt_token=jwt.sign(data,secret)
    res.json({success,jwt_token});
})


router.post('/login',[
    body("email"),
    body("password")
],async (req,res)=>{
    let success=false;
    try{
        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({success,error:"this email does not registered"});
        }
        const result=await bcrypt.compare(req.body.password,user.password);
        if(!result){
            return res.status(400).json({success,error:"this is not the right password"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        success=true;
        const jwt_token=jwt.sign(data,secret)
        res.json({success,jwt_token});
    }
    catch(error){
        console.error(error.message)
        res.status(400).json({error:"Internal Server Error"});
    }
    
})


router.get('/getInfo',fetchUser,async (req,res)=>{
    // console.log("coming")
    try{
        const id=req.user.id
        const user=await User.find({_id:id})
        res.json(user)
    }
    catch(error){
        console.error(error.message)

    }
   
})

module.exports=router;