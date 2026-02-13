import React from 'react'
import Student from './Student'

const Professor = ({notice}) => {
  return (
    <div>
        <h2>Professor Component</h2>
        <Student notice={notice}/>
        
    </div>
  )
}

export default Professor