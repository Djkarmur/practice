import React, { useState } from 'react'

const Hookcounter2 = () => {
    const [name,setName]= useState({ firstName:'', lastName:''});
    

    

  return (
    <div>
      <form>
        <input type='text' value={name.firstName} onChange={(ev)=>{setName( {...name,firstName: ev.target.value})}} placeholder="enter first name"  />
        <input type='text' value={name.lastName} onChange={(ev)=>{setName( {...name,lastName: ev.target.value})}} placeholder="enter last name"  />

       <h2>{name.firstName}{name.lastName}</h2> 
      </form>
    </div>
  )
}

export default Hookcounter2
