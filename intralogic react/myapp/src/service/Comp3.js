import React, { useContext } from 'react';
import {val1,val2} from "../App";

const Comp3 = () => {
    const useval1= useContext(val1);
    const useval2=useContext(val2);
  return (
    <div>
        <h1>the value is {useval1} {useval2}</h1>
    </div>
  )
}

export default Comp3