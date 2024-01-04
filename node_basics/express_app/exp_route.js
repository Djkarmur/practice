const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("welcome to homepage");
})
app.get('/about',(req,res)=>{
    res.send("about page");
})
app.get('/weather',(req,res)=>{
    res.sendFile('C:/Users/Dipak/OneDrive/Desktop/Node_basics/express_app/test.txt');
})

app.listen(2000);

