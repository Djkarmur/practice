const express=require('express');
const path=require('path');
const parser=require('body-parser');
const session=require('express-session');
const {v4:uuidv4} =require('uuid');
const app=express();

const routers=require('./router');

//body-paeser
//passing incoming request into middleware before using it

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
const port=process.env.PORT || 3000
app.set('view engine','ejs'); //initialization of template engine

app.use('/static',express.static(path.join(__dirname,'public')))

app.use('/route',routers);

app.get('/',(req,res)=>{
    res.render('base',{title:'login form'});
})

app.listen(port);