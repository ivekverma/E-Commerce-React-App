const express=require('express');
const router=express.Router();
const {body}=require('express-validator')
const Product=require('../models/Product')
const CartProduct=require('../models/CartProduct')
const fetchUser=require('../middleware/FetchUser');
const Order = require('../models/Order');

router.post('/show',(req,res)=>{
    console.log("something")
    res.json("this is something")
})

router.post('/addProduct',[
    // body("name"),
    // body("brand"),
    // body("actual_price"),
    // body("discount_price"),
    // body("discount"),
    // body("image"),
    // body("description"),
    // body("category"),
    // body("oparating_system"),
    // body("technology"),
    // body("size"),
    // body("ram"),
    // body("dimension"),
    // body("capacity"),
    // body("configuration"),
    // body("door"),
    // body("rating_star")
],async (req,res)=>{
    console.log("reached")
    try{
        const product=await Product.create({
            name:req.body.name,
            brand:req.body.brand,
            actual_price:req.body.actual_price,
            discount_price:req.body.discount_price,
            discount:req.body.discount,
            image:req.body.image,
            description:req.body.description,
            category:req.body.category,
            operating_system:req.body.operating_system,
            technology:req.body.technology,
            size:req.body.size,
            ram:req.body.ram,
            storage:req.body.storage,
            dimension:req.body.product_dimension,
            capacity:req.body.capacity,
            configuration:req.body.configuration,
            door:req.body.door,
            rating_star:req.body.rating_star,
            resolution:req.body.resolution,
            search_resolution:req.body.search_resolution,
            refresh_rate:req.body.refresh_rate,

        })      
        res.json({product})
    }
    catch(error){
        console.error(error.message)
        return res.status(400).json({error:"Internal server error"});
    }
})


router.get('/getProduct',async (req,res)=>{
    console.log("calling")
    try{
        const product=await Product.find();
        res.json(product)
    }
    catch(error){
        console.error(error.message)
    }
    
})

router.get('/getFeaturedProduct/:featured',async(req,res)=>{
    console.log("calling backend")
    const product=await Product.find({featured:req.params.featured})
    res.json(product)
})


router.get('/mobileProduct/:keyword',async(req,res)=>{
    const product=await Product.find({category:req.params.keyword})
    res.json(product)
})


router.get('/getProductbyId/:id',async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        res.json(product)
    }
    catch(error){
        console.error(error.message)
        
    }
    
})


router.post('/addToCart/:id',fetchUser,async (req,res)=>{
    console.log("pahuch gaya")
    let success=false;
    try{
        user_id=req.user.id;
        const product=await Product.findById(req.params.id)
        console.log(product)
        
        const newProduct = await CartProduct.create({
            userid:user_id,
            name:product.name,
            brand:product.brand,
            actual_price:product.actual_price,
            discount_price:product.discount_price,
            discount:product.discount,    
            image:product.image,
            description:product.description,
            category:product.category,
            operating_system:product.operating_system,
            technology:product.technology,
            size:product.size,
            ram:product.ram,
            dimension:product.dimension,
            capacity:product.capacity,
            configuration:product.configuration,
            door:product.door,
            rating_star:product.rating_star,
            storage:product.storage,
            resolution:product.resolution,
            search_resolution:product.search_resolution,
            refresh_rate:product.refresh_rate,
            count:"1"
        })
        success=true;
        // console.log(CartProduct.length)
        
        let pro=await CartProduct.find({userid:req.user.id});
        // console.log(newProduct)
        // res.json(newProduct)
        res.json({success,pro})
    }
    catch(error){
        console.error(error.message)
    }
})


router.get('/getCartProducts',fetchUser,async (req,res)=>{
    console.log("pahuch gaya")
    const user_id=req.user.id
    console.log(user_id);
    const cartProduct=await CartProduct.find({userid:user_id})
    res.json(cartProduct)
})


router.put('/updateQuan/:id',async(req,res)=>{
    console.log("reached")
    const {userid,name,brand,discount_price,actual_price,discount,operating_system,technology,size,ram,image,description,category,__v,count}=req.body;
    const newCartProduct={}
    if(userid){newCartProduct.userid=userid};
    if(name){newCartProduct.name=name};
    if(brand){newCartProduct.brand=brand};
    if(discount_price){newCartProduct.discount_price=discount_price};
    if(discount){newCartProduct.discount=discount};
    if(actual_price){newCartProduct.actual_price=actual_price};
    if(image){newCartProduct.image=image};
    if(description){newCartProduct.description=description};
    if(category){newCartProduct.category=category};
    if(__v){newCartProduct.__v=__v};
    if(operating_system){newCartProduct.operating_system=operating_system};
    if(technology){newCartProduct.technology=technology};
    if(size){newCartProduct.size=size};
    if(ram){newCartProduct.ram=ram};
    let newCount=parseInt(count)+1;
    newCartProduct.count=newCount

    let pro=await CartProduct.findById(req.params.id)
    pro=await CartProduct.findByIdAndUpdate(req.params.id,{$set:newCartProduct},{new:true})
    res.json({pro})
})


router.put('/removequan/:id',async(req,res)=>{
    console.log("reached")
    const {userid,name,brand,discount_price,actual_price,discount,operating_system,technology,size,ram,image,description,category,__v,count}=req.body;
    const newCartProduct={}
    if(userid){newCartProduct.userid=userid};
    if(name){newCartProduct.name=name};
    if(brand){newCartProduct.brand=brand};
    if(discount_price){newCartProduct.discount_price=discount_price};
    if(discount){newCartProduct.discount=discount};
    if(actual_price){newCartProduct.actual_price=actual_price};
    if(image){newCartProduct.image=image};
    if(description){newCartProduct.description=description};
    if(category){newCartProduct.category=category};
    if(__v){newCartProduct.__v=__v};
    if(operating_system){newCartProduct.operating_system=operating_system};
    if(technology){newCartProduct.technology=technology};
    if(size){newCartProduct.size=size};
    if(ram){newCartProduct.ram=ram};
    let newCount=parseInt(count)-1;
    newCartProduct.count=newCount

    let pro=await CartProduct.findById(req.params.id)
    pro=await CartProduct.findByIdAndUpdate(req.params.id,{$set:newCartProduct},{new:true})
    res.json({pro})
})


router.delete('/removeItem/:id',async (req,res)=>{
    let product=await CartProduct.findByIdAndDelete(req.params.id);
    res.json(product);
})


router.post('/order',async (req,res)=>{
    const {userId,productId,name,contact,email,address,city,pincode}=req.body;
    let order= await Order.create({
        userId:req.body.userId,
        productId:req.body.productId,
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        pincode:req.body.pincode
    })
    res.json(order);
})

module.exports=router;