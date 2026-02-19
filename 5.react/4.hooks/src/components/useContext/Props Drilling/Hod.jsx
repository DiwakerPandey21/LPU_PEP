import React from 'react'
import Professor from './Professor'

const Hod = ({notice}) => {
  return (
    <div>
        <h2>Hod component</h2>
        <Professor notice={notice}/>
    </div>
  )
}

export default Hod