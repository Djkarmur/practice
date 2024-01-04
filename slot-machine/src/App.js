// import React from "react";
// import SlotM from './SlotM';
// const App = () =>{
//     return(
//     <div className='main'>
//   <h1 className='heading'>🤖 welcome to slot machine 🤖</h1>
//   <SlotM x='😁' y='😁' z='😁' />
//   <SlotM x='❤️' y='😁' z='😁'/>
//   <SlotM x='😁' y='👍' z='😁'/>
//   <SlotM x='😍' y='😍' z='😍'/>
//   </div>
//     )
// }

// export default App;

// import React, { useState } from "react";

// const App = () =>{
//   let newtime= new Date().toLocaleTimeString();

//   const [count,settime] = useState(newtime);

//   const inc = () => {
//     newtime= new Date().toLocaleTimeString();
//     settime(newtime);

//    }
//   setInterval(inc, 1);

//   return(
//     <>
//      <h1>{count}</h1>

//      {/* <button onClick={inc}>Click</button> */}
//     </>
//   )
// }
// export default App;
// import './index.css';
// import React, { useState } from "react";

// const App = () => {
//   let name = "click";
//   let name2= "change";
//   let green ="purple";
//   let red = "pink";
//   const [curr, setfunc] = useState(name);
//   const [curr2,setname] = useState(name2);
//   const [color, setColor] = useState('yellow');

//   const[toggle,setclass] = useState('false');

// const changed = () =>{
//   setclass(!toggle)
// }

//   const change = () => {
//    setfunc('hii');
//    setColor(green);
//    setname("Dipak");
//   };
//   const changeto = () => {
//     setfunc((name = "ouch"));
//     setColor(red);
//   };
  
//   return (
//     <>
//     <div style={{backgroundColor:color}}>
//       <button onClick={change} onDoubleClick={changeto} >
//         {curr}
//       </button>
//       <div className={`${toggle && "white"} black` }>
//             <button onClick={changed} onDoubleClick={change}>{curr2}</button>
//       </div>
//       </div>
//     </>
//   );
// };
// export default App;

// import React from 'react'
// import Hookcounter from './Hookcounter'
// import Hookcounter2 from './Hookcounter2'
// import Hookcounter3 from './Hookcounter3'
// import EffectHook from './EffectHook'
// import Mousemove from './Mousemove'
// import Intervaleffect from './Intervaleffect'
// import Datafetching from './Datafetching'
// import ComponentA from './ComponentA'
// import UsereducerHook from './UsereducerHook'

//  export const userContext = React.createContext();
//  export const nameContext = React.createContext();
// const App = () => {
//   return (
//     <div>
//       {/* <Hookcounter/>
//       <Hookcounter2/> */}
//       {/* <Hookcounter3/> */}
//       {/* <EffectHook/> */}
//       {/* <Mousemove/> */}
//       {/* <Intervaleffect/> */}
//       {/* <Datafetching/> */}
//       {/* <userContext.Provider value={'dipak'}>
//        <nameContext.Provider value={'karmur'}>
//        <ComponentA/>
//        </nameContext.Provider>
       
//       </userContext.Provider> */}
      
//       <UsereducerHook/>
//     </div>
//   )
// }

// export default App

import React, { useReducer } from 'react'
import CompA from './CompA';
import CompB from './CompB';
import CompD from './CompD';
import CompC from './CompC';
import CompE from './CompE';
import EffectHook from './EffectHook';

const initialstate=0;
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialstate;   
        default:
           return state;
                   
    }
}
export const countContext = React.createContext();

const App = () => {
    const [count,dispatch] =useReducer(reducer,initialstate);
  return (
    // <countContext.Provider value={{countstate:count,countdispatch:dispatch}}>
    //   <div>
    //    <button>{count}</button>
    //    <CompA/>
    //    <CompB/>
    //    <CompD/>
       
    //  </div>
    // </countContext.Provider>
    <EffectHook/>
    
  ) 
}

export default App
