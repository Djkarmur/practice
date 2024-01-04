import React from 'react'
import ComponentC from './ComponentC';
import ContextHook from './ContextHook';

const ComponentB = () => {
  return (
    <div>
      <ComponentC/>
      <ContextHook/>
    </div>
  )
}

export default ComponentB
