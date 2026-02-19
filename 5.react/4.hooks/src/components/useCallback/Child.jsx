import React from 'react'
import { useEffect } from 'react'

const Children1 = ({handleclick}) => {

    useEffect(()=>{
        console.log("UseEffect is working");
    },[handleclick])

  return (
    <div>Children Component</div>
  )
}

export default Children1