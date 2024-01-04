const http=require('http');

const routes={
    '/':function root(req,res){
        res.writeHead(200);
        res.end("the home page");
    },
    '/about':function about(req,res){
        res.end("the about page");
    }
}

http.createServer((req,res)=>{
    if(req.url in routes){
        return routes[req.url](req,res);
    }
}).listen(3000);


 //path module

const path=require('path');
file=path.resolve('test.txt');
file=path.dirname('Node_basics/test.txt');
console.log(file);
