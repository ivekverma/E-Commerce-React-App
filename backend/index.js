const connectToMongo=require('./db');
const express=require('express')
const cors=require('cors')
const app=express();
connectToMongo();
const port=2999;


app.use(express.json())
app.listen(port,()=>{
    console.log("backend is running at port : "+port)
})
app.use(cors())
app.use('/api/product',require('./routes/product'));
app.use('/api/user',require('./routes/user'));