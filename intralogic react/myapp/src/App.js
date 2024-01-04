// import React, { useEffect } from "react";
// import { useState } from "react";
// import api from "./service/api"
// function App(){
//   useEffect(()=>{
//     (async()=>{
//       await 
//     })()
//   },[])
//  let nowtime= new Date().toLocaleTimeString();
//  const [cnt,settime]=useState(nowtime);
//  console.log(nowtime);

// const increment=()=>{
//   let newtime = new Date().toLocaleTimeString();
//   settime(newtime)

// }
// api().then()
// async  function getData(){
//   let data =await api()
//   console.log(data)
// }
// // setInterval(increment,1);
//  return(
//    <div className="App">
//      <div>
//        <button onClick={()=>{getData()}}>get data</button>
//      </div>
//    <h1>{cnt}</h1>
//    {/* <button onclick={increment}>update</button> */}
//    </div>
//  )
// }
// export default App;

import React, { createContext } from 'react';

import Comp3 from './service/Comp3';
import Incredecre from './service/Incredecre';
import Apiaxios from './service/Apiaxios';
const val1 =createContext();
const val2 =createContext();
const App = () => {
  return (
     <val1.Provider value={"Dipak"}>
        <val2.Provider value={'Karmur'}>
        <Comp3/>
             {/* <Incredecre/> */}
        </val2.Provider>
     </val1.Provider>
    //<Apiaxios/>
   
  )
}

export default App;
export {val1,val2};
