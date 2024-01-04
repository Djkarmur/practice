// http post request
const http=require('https');
const axios=require('axios');

const data=JSON.stringify(
    {
        name:'john',
        job:'developer'
    }
)

axios.post('https://reqres.in/api/users',data).then((res)=>{
    console.log('the status code:',res.status);
    console.log('the data is:',JSON.stringify( res.data));
}).catch(err=>{
    console.log(err);
}
)

// const options={
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:{
//     'Content-Type':'Application/json'
// }}

// //request
// const req =http.request(options,(res)=>{
//     let data='';
//    console.log('status code:',res.statusCode);

//    res.on('data',(sum)=>{
//         data=sum+data;
//    })
//    res.on('end',()=>{
//        console.log('the data is :',JSON.parse(data));
//    })
// })

// req.write(data);
// req.end();
