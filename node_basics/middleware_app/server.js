const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();

const port=process.env.PORT || 3000;

app.use((req,res,next)=>{
  console.log('the date is :'+ new Date());
  next();
});

app.use((req,res,next)=>{
    var filename= path.join(__dirname,'static',req.url);
    fs.stat(filename,(err,info)=>{
        if(err){
            next();
        }
        if(info.isFile()){
            res.sendFile(filename);
         
        }else{
            next();
        }
    })
});

app.use((req,res)=>{
    res.status(404);
    res.send('no file available');
})

app.listen(port);
