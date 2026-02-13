import React from 'react'
import useFetch from './Custome'

const Testing = () => {

    const {data,loading,error
    } = useFetch('https://jsonplaceholder.typicode.com/todos/1')

    if(loading) return <p>Loading.........</p>
    if(error) return <p>Error: {error.toString()}</p>

  return (
    <div>
        <h1>API Data:</h1>
        {Array.isArray(data) ? data.map((e,idx) => <div key={idx}>{JSON.stringify(e)}</div>): (<div>{JSON.stringify(data)}</div>)}
    </div>
  )
}

export default Testing