const car =require('./module.js');

console.log(car);


function get(get,callback){
    setTimeout(()=>{
        console.log(get);
        callback();
    },1000);
}
function display(){
    console.log("display message");
}
get("get message",()=>{console.log("display message")});

              //async and await
function clown(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("hiii");
        }, 2000);
    })
}
async function getmessage(){
    const msg=await clown();
    console.log("message:" , msg);
}

getmessage();