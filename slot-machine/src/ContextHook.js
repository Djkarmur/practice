import React, { useContext } from 'react'
import { nameContext, userContext } from './App'

const ContextHook = () => {
   const user= useContext(userContext);
   const lastname= useContext(nameContext);
  return (
    <div>
      {user}:{lastname}
    </div>
  )
}

export default ContextHook
