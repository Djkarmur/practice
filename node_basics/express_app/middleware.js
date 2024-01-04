//middleware
const express=require('express');
const { dirname } = require('path');
const app=express();

const mylogger = function(req,res,next){ 
    console.log("logged");
    next();
   }
   
   const myreq = function(req,res,next){ 
    req.reqTime=Date.now();
    next();
   }

   app.use(mylogger);
   app.use(myreq);
   app.get('/',(req,res)=>{
       res.send(` the time is: ${req.reqTime}`);
   })
   app.listen(3000);

   //static file in express
   const path=require('path');
   const publicpath=path.resolve(dirname,'public')
   app.use(publicpath,express.static('static'));
   app.use('/express_app',express.static('static'));
      <img src='/img.jpg' > </img>

   app.get('/',(req,res)=>{
       console.log('static files');
   })
   app.listen(3000);