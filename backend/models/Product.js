const mongoose=require('mongoose')
const {Schema}=mongoose;

const productSchema=new Schema({
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    name:{
        type:String,
        // required:true
    },
    actual_price:{
        type:String,
        required:true
    },
    discount_price:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    operating_system:{
        type:String,
        // required:true
    },
    technology:{
        type:String,
        // required:true
    },
    category:{
        type:String,
        required:true
    },
    size:{
        type:String,
        // required:true
    },
    ram:{
        type:String,
        // required:true
    },
    storage:{
        type:String,
        // required:true
    },
    dimension:{
        type:String,
        // required:true
    },
    capacity:{
        type:String,
        // required:true
    },
    configuration:{
        type:String,
        // required:true
    },
    door:{
        type:String,
        // required:true
    },
    rating_star:{
        type:String,
        // required:true
    },
    resolution:{
        type:String,
        // required:true
    },
    search_resolution:{
        type:String,
        // required:true
    },
    refresh_rate:{
        type:String,
        // required:true
    },
    featured:{
        type:String,
        // required:true
    }

   
})

const Product=mongoose.model("product",productSchema)
module.exports=Product;