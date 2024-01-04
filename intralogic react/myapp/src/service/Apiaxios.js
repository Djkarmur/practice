import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Apiaxios = () => {
    const [num,setnum] = useState();
    const [name,setname] = useState();
    const [moves,setmoves] = useState();

    const selectval = (e) => {
        setnum(e.target.value);
    }

    const getapidata = async()=>{
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  setname(res.data.name);
     setmoves(res.data.moves.length);
   
    }
    useEffect(() => {
     getapidata();
     
    
    }, [num])
    
  return (

    <div>
        <select onChange={selectval} value={num} >
        <option value="1" >1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="25">25</option>
        </select>
        <h1>the value is {num}</h1>
        <h1>the name is <span style={{color:"green"}}>{name}</span></h1>
        <h1>no. of moves is <span style={{color:"green"}}>{moves}</span></h1>
    </div>
  )
}

export default Apiaxios