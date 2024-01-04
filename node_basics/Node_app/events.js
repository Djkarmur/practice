const event=require('events');

let ev = new event.EventEmitter();
ev.on('newevent',(msg)=>{
  console.log(msg);
})
const cont=(msg,log)=>{
    console.log("the message is:",msg, log);
  }

ev.once('once',cont);

ev.emit('newevent','hiii');
ev.off('once',cont)
ev.emit('once','hii','hello');

// streams

const fs=require('fs');
const http=require('http');

const server= http.createServer((req,res)=>{
    const stream= fs.createReadStream('test.txt');
    stream.pipe(res);
})
server.listen(3000);


//buffer
const buf=Buffer.from('hii');
console.log(buf.toString());
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

//exception handeling

dosome1()
.then(()=>{
   return dosome2().catch(err=>{
       throw err; //break 
   })
}).then(()=>{
    return dosome3().catch(err=>{
        throw err;
    }) 
})
.catch(err=>console.log(err));