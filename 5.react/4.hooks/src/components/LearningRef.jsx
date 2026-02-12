import React from 'react'
import { useRef } from 'react';

// crate a input filed which get focus when we click a button

const LearningRef = () => {

    const inputRef = useRef(null);  // creating ref
    console.log(inputRef)

    const focusMyInput = () =>{
        inputRef.current.focus(); // input field will be ficused
    }

  return (
    <div>
        <input ref={inputRef} type="text"  placeholder='Please Type Here...'/>
        <button onClick={focusMyInput}>Focus</button>
    </div>
  )
}

export default LearningRef