// import React from 'react';
// import Reactdom from 'react-dom';
// import add from './App';
// import {sub} from './App';
// import {mul} from './App';
// import {div} from './App';
// //  import './index.css';
// //  import App from './App';
// // import Friend from './Friend';

// Reactdom.render(
//   <>
//    <ol>
//      <li> sum is:{add(10,3)}</li>
//      <li> subtraction is:{sub(12,3)}</li>
//      <li> multiplication is:{mul(2,3)}</li>
//      <li> division is:{div(14,3)}</li>
//    </ol>
//   </>,document.getElementById("root")
// )

// Reactdom.render(
  
//    <Friend />
//   ,document.getElementById("root")
// )


// let date =new Date();
// var greet;
// const greetstyle={
// }
// const time=date.getHours();
// if(time>=12 && time<19){
//   greet='Good AfterNoon';
//   greetstyle.color='orange';
// } else if(time>19 && time<=24){
//   greet='Good Night';
//   greetstyle.color='red';
// } else{
//    greet='Good Morning';
//    greetstyle.color='green'
// }

//  Reactdom.render(
//    <>
//    <App />
//     </>, document.getElementById("root")
//  )
  
// const img1='https://picsum.photos/200/300';
// const img2='https://picsum.photos/220/300';
// const img3='https://picsum.photos/240/300';
// const links='https://www.instagram.com/?hl=en';

// Reactdom.render(
//   <>
//   <h1 className="heading">My Name is Dipak Karmur</h1>
//   <div className="images">
//   <img src={img1} />
//   <img src={img2} />
//   <a href={links}  target="_blank">
//   <img src={img3} />
//   </a>
//   </div>
//   </>,
//   document.getElementById("root"))


// // const fname='Dipak';
// // const lname='Karmur'
// // const date =new Date();
// // const cdate=date.toLocaleDateString();
// // const time=date.toLocaleTimeString();
// Reactdom.render(
// <>
// <p>{`date: ${cdate} and time: ${time}`}</p>
// <p> my name is {fname} and id {20+31}</p>
// <p>{`my name is ${fname} ${lname} `} </p>
// </>
// ,document.getElementById('root'));


import React from "react";
import Reactdom from "react-dom";
import Card from './Card';
import './index.css';
import Sdata from './Sdata';


Reactdom.render(
  <>
  <h1 style={{textAlign:'center',backgroundColor:'#fff',fontFamily:'Raleway',letterSpacing:'2px',color:'#868686',fontSize:'1.5 rem'}}>BEST NETFLIX SERIES IN 2022</h1>
  <div style={{display: 'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
    { Sdata.map( (v) => {
       return (
         <Card imgsrc={v.imgsrc}
         titlename={v.titlename}
         sname={v.sname}
         official={v.official}  />
       )
    } ) }
   
   </div>
  </>,document.getElementById("root")
)