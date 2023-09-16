const mongoose=require('mongoose');
const URI="mongodb://127.0.0.1:27017/E-Commerce?";

const connectToMongo=()=>{
    mongoose.connect(URI);
    console.log("connected");
}

module.exports=connectToMongo