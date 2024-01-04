const http=require('http');
const path= require('path');
const fs = require('fs');
const { extname } = require('path');

// const server = http.createServer((req,res) => {
//     fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
//         if(err) throw err;
//         if(req.url==='/'){
//             res.writeHead(200,{'content-Type':'Text/html'});
//             res.end(data);
//         }
//     })

//     fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>{
//         if(err) throw err;
//         if(req.url==='/about'){
//             res.writeHead(200,{'content-Type':'Text/html'});
//             res.end(data);
//         }
//     })
//     const users=[
//         {
//             name:"bob",age:20
//         },{
//             name:'john',age:19
//         },
//     ]
//     if(req.url==='/api/users'){
//         res.writeHead(200,{"content-Type":"app/json"});
//         res.end(JSON.stringify(users));
//      }
    
// });


const server=http.createServer((req,res)=>{
    let filePath = path.join(__dirname,'public', req.url ==='/' ? "index.html" : req.url);
    let extname=path.extname(filePath);
    let contentType='text/html';

    switch(extname){
        case '.js':
            contentType:"application/js";
            break; ''
        case ".css":
            contentType:"style/css";
            break;
        case ".webp":
            contentType:"picture/webp";
            break;
    }

 fs.readFile(filePath,(err,data)=>{
    if(err){
    if(err.code=="ENOENT"){
        //page not found
        fs.readFile(path.join(__dirname,'public','404.html'),(err,data)=>{
            res.writeHead(200,{"contentType":"text/html"});
            res.end(data,'utf8');
        })
    }else{
        res.writeHead(500);;
        res.end('server error');
    }
} else{
    res.writeHead(200,{'contentType': extname});
    res.end(data,'utf8');
}
 })
})

 const PORT=process.env.PORT || 3000;
 server.listen(PORT,()=>{
    console.log('server running on port :',PORT);
})
