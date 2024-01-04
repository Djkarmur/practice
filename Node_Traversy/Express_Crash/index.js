const express= require('express');
const path=require("path");

const app = express();


//middleware                        //every time we make request then middleware will be run
const log = (req,res,next)  => {
  console.log("hello");
  next();
};

//init middleware
app.use(log);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:"false"}));

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//users api routes
app.use('/api/user',require('./Routes/users'));

app.listen(3000,()=>{console.log("running")});