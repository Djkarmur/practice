 //views

 const express=require('express');
 const app=express();

 app.set('view engine','pug');

 app.get('/index',(req,res)=>{
     res.render('index',{title:'express application',h1:'hii'});
 }).listen(3000);