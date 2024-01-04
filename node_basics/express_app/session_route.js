const express=require('express');
const app=express();
const session=require('express-session');


app.use(session({
    secret:'secret key',
    resave:true,
    saveUninitialized:true,
}));

app.get('/',(req,res)=>{
    req.session.name='john';
    res.send('session set');
})

app.get('/session',(req,res)=>{
    var name=req.session.name;
    res.send(name);
})

app.get('/destroy',(req,res)=>{
    req.session.destroy(err=> console.log('session destroyed'));
   
    res.end();
})
app.listen(3000);