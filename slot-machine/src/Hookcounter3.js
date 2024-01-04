import React, { useState } from 'react'

const Hookcounter3 = () => {
    const [item,setitem]=useState([]);

    const addItem = () =>{
        setitem([...item,{id:item.length,value:Math.floor(Math.random()*10)}])
    }
  return (
    <div>
        <button onClick={addItem}>Add</button>
      <ul>
        {
            item.map(iteme =>(
                <li key={iteme.id}>{iteme.value}</li>
            ))
        }
        
      </ul>
    </div>
  )
}

export default Hookcounter3
