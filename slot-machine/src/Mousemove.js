import React, { useEffect, useState } from 'react'

const Mousemove = () => {
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);

    const mouseposition = e =>{
        setx(e.clientX);
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log('useeefect called');
        window.addEventListener('mousemove',mouseposition)
    },[])
  return (
    <div>
       <h1>{x} {y}</h1>
    </div>
  )
}

export default Mousemove
