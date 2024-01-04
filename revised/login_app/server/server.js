import  express  from "express";
import cors from "cors";
import connect from "./connection.js";
import router from "./router/route.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.disabled('x-powered-by'); //less hackers know about our stack

app.use('/api',router);

const port = 8080;

//http get request
app.get('/',(req,res)=>{
    res.status(200).json("home get request");
});

//start server only when we have valid connection
/* connect function return promise from connection.js thus then and catch block */
connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`server connected to ${port}`);
        });
    } catch (error) {
        console.log("cannot connect to the server!")
    }
}).catch(error=>{
    console.log("invalid databse connection..")
});



//start server

