import React from 'react'
import { userContext,nameContext } from './App'
const ComponentC = () => {
  return (
    <div>
      component c
      <userContext.Consumer>
        {
            user =>{
                return (
            <nameContext.Consumer>
        {
            lastname =>{
                return (
                    <div>username:{user} {lastname}</div>
                )
            }
            
        }
           </nameContext.Consumer>
                )
            }
        }
        
        
      </userContext.Consumer>
      
    </div>
  )
}

export default ComponentC
