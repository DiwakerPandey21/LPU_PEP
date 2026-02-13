import React from 'react'
import { useState, useLayoutEffect } from 'react';

const LearnLayoutEffect = () => {

    const [bgColor,setBgColor] =useState('green');

    useLayoutEffect(()=>{
        document.body.style.backgroundColor = bgColor
    },[bgColor])

  return (
    <div>
        <button onClick={()=> setBgColor('lightblue')}>Change Color</button>
    </div>
  )
}

export default LearnLayoutEffect