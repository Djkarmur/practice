//http server

const http =require('http');

const hostname ='127.0.0.1';
const port=3000;


http.createServer((req,res)=>{
    // res.writeHead('200',{'Content-Type':'text/plain'})
    // res.write('welcome to http server');
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('welcome to http server');
  
}).listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})

// http request
http.get('http://api.open-notify.org/astros.json',resp=>{
    let data='';
    resp.on('data',(sum =>{
        data=data+sum;
    }));
    resp.on('end',()=>{
        const jsndata=JSON.parse(data);
        console.log(jsndata);
    });
})

