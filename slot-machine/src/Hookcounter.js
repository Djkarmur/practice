import React, { useState } from 'react'

const Hookcounter = () => {
    const [count,setcount]=useState(0);
   
   
    
   const  setincrement=()=>(
        setcount(sum=>sum+1)
    );
    const setdecrement=()=>(
        setcount(count-1)
    );
  return (
    <div>
      <div className='counter'>
         <button className='incre' onClick={setincrement}>+</button> {count}
        
        
        <button className='decre' onClick={setdecrement}>-</button>
        
      </div>
    </div>
  )
}

export default Hookcounter
