import { useCallback, useState } from 'react'
import Child from './Child.jsx'


const Parent1 = () => {

    const [count1,setCount1]= useState(0);
    const [count2,setCount2]= useState(0);

    // using useCallback
    const handleClick = useCallback(()=>{
        setCount1(count1 + 1);
    },[count1])     


  return (
    <div>
        <p>Count: {count2}</p>

        <Child handleclick={handleClick}/>
        <button onClick={()=> setCount2(count2 + 1)}>Increase</button>
    </div>
  )
}

export default Parent1