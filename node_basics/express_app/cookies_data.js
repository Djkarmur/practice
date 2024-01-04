const express=require('express');
const app=express();
const cookies=require('cookie-parser');

app.use(cookies());
const user={
    name:'dev',
    age:'24',
}

app.get('/',(req,res)=>{
    res.send('cookie content');
})

app.get('/setdata',(req,res)=>{
   res.cookie('userdata',user);
   res.send('cookie data are seted');
})
 
app.get('/cookie',(req,res)=>{
    res.send(req.cookies);
})

app.get('/destroy',(req,res)=>{
    res.clearCookie('userdata');
    res.end();
})

app.listen(3000); 