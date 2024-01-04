import React, { useEffect, useState } from 'react'

const Intervaleffect = () => {
    const [count,setcount]=useState(0);

    const tick = () =>{
        setcount(count=>count+1);
    }
    useEffect(()=>{
        console.log("triggered");
        const interval = setInterval(tick,1000);
        return ()=>{
            clearInterval(interval);
        }
},[])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Intervaleffect
