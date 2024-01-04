import React, { useCallback, useState } from 'react'
import Title from './usecallback/Title'
import Button from './usecallback/Button';
import Count from './usecallback/Count';


const UsecallbackHook = () => {
    const [age,setAge] = useState(21);
    const [salary,setSalary]=useState(50000);

    const incrementAge = useCallback(()=>{
        setAge(age+1);
    },[age])
    const incrementSalary =useCallback(()=>{
        setSalary(salary+2000);
    },[salary])


  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default UsecallbackHook
