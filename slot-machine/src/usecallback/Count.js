import React from 'react'

const Count = ({text,count}) => {
  return (
    <div>
      <h3>{text}:{count}</h3>
     
    </div>
  )
}

export default React.memo(Count) 