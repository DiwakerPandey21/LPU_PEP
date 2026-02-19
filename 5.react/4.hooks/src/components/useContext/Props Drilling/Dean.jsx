import React from 'react'
import Hod from './Hod'

const Dean = ({notice}) => {
  return (
    <div>
        <h2>Dean Component</h2>
        <Hod notice={notice}/>
    </div>
  )
}

export default Dean