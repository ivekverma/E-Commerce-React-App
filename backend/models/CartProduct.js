const mongoose=require('mongoose');
const {Schema}=mongoose;

const cartSchema=new Schema({
    userid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        // required:true
    },
    brand:{
        type:String,
        required:true
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
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    count:{
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
        type:String
    },
    capacity:{
        type:String
    },
    configuration:{
        type:String
    },
    door:{
        type:String
    },
    rating_star:{
        type:String
    },
    resolution:{
        type:String
    },
    search_resolution:{
        type:String
    },
    refresh_rate:{
        type:String
    },

})

const CartProduct=mongoose.model("addProduct",cartSchema);
module.exports=CartProduct;