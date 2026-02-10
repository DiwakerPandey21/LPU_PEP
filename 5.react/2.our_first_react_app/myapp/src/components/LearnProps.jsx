// Props: with the help props we can transfer data from parent component to its children component

import './LearnProps.css'

import React from 'react'

const LearnProps = (props) => {
  return (
    <article className='person-card'>
        <h3>Name: {props.name}</h3>
        <h4>Age: {props.age}</h4>
        <p>Crush: {props.crush}</p>
    </article>
  )
}

export default LearnProps