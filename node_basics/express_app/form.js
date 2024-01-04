const express=require('express');
const app=express();

app.use(express.urlencoded({
    extended:true
}))

app.set('view engine','pug');

app.post('/form_submit',(req,res)=>{
    const user=req.body.username;
    const email=req.body.email;
    res.send(`the required name is ${user} and email is ${email} `);
})
app.get('/form',(req,res)=>{
  res.render('form');
}).listen(3000);
