//write and update files
const fs=require('fs');
const data={
    type:"node data"
}
const content='node tutorial'

fs.writeFileSync('test.json',JSON.stringify(data));
   function create (path){
   fs.writeFile(path,content,{flag:'a+'},err=>{
    if(err){
        console.log(err);
        return
    }
  
})
}

async function removed(){
     
     const result=create('test.txt');
     if(result){
         console.log(result);
     }
     console.log('success');
 fs.unlink('test.json', err => {
        if (err) {
            console.log(err);
        }
        console.log("removed successfully");
    })
}
removed();

