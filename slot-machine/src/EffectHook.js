import React, { useState,useEffect } from 'react'


const EffectHook = () => {
    const [count,setcount]=useState(0);
    const [name,setname]=useState('');
    const change  = () =>{
        setcount(count+1);
    }
   
    useEffect(() => {
      console.log("useeffect document title update")
      document.title = `clicked ${count} times`;
    
     
    },[count])
    
  return (
    <div>
      <input type='text' value={name} onChange={(ev)=>setname(ev.target.value)}/>
      <button onClick={change}>clicked:{count}</button>
    </div>
  )
}

export default EffectHook;
