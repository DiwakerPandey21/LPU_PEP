import React from 'react'
import { useContext } from 'react'
import NoticeComponent from './NoticeComponent'

const Student = () => {

    const data = useContext(NoticeComponent);

  return (
    <div  className='container'>
        <div className='card'>
        <h2 className='title'>University Board</h2>
        <p className='notice'>{data.notice}</p>
        </div>
        
    </div>
  )
}

export default Student