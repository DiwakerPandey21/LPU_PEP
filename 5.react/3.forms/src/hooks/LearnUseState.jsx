// UseState: It is a hook which update our UI. 
//  It returns an array([intial_value,setValue]):

// Create a counter using react:

import React, { useState } from 'react'

export const LearnUseState = () => {

    // let count = 0;
    const [count,setCount]=useState(0)

    let countIncreaser = () =>{
        // count = count + 1;
        // console.log(count)
        setCount(count + 1);
    }

  return (
    <div>
        <h1>Count Is: {count}</h1>
        <button onClick={countIncreaser}>Increase Count</button>
    </div>
  )
}
