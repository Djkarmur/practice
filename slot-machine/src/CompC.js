import React,{useContext} from 'react'
import { countContext } from './App'


const CompC = () => {
    const countcontext = useContext(countContext);

  return (
    <div style={{display:'flex',gap:'20px'}}>
      component C
      <button onClick={()=>countcontext.countdispatch('increment')}>increment</button>
      <button onClick={()=>countcontext.countdispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countdispatch('reset')}>reset</button>
    </div>
  )
}

export default CompC
