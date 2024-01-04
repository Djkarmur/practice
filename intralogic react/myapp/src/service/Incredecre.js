import React from 'react';
import { useReducer } from 'react';

const initialstate=0;
const reducer = (state,action) =>{
     if(action.type==="incre"){
       return state+1;
     } else{
       return state-1;
     }          
    
}
const Incredecre = () => {
   
    const [state, dispatch] = useReducer(reducer,initialstate )
  return (
    <>
     <h1>{state}</h1>
     <button onClick={()=>dispatch({type:"incre"})}>+</button>
     <button onClick={()=>dispatch({type:"decre"})}>-</button>
    </>
  )
}

export default Incredecre;