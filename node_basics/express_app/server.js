const express=require('express');
const app=express();

app.get('/home',(req,res)=>{
    res.send('express application....');
})
app.listen(3000,()=>{
    console.log("success");
})


