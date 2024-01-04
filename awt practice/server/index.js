import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js';

const app=express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/",routes);

 const connection = async() =>{
    try{
        await mongoose.connect(process.env.url);
        console.log("database connected!");
    }catch(err){
       console.log(err);
    }
 } 
 connection();
 const port=5000
app.listen(port,()=>{
    console.log(`server started on port ${port} succesfully`);
})