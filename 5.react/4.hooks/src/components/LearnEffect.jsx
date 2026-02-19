import React, { useState,useEffect } from 'react'

const LearnEffect = () => {

    const [data,setData] = useState([]);

    // useEffect ko use krege: to fetch data from Jsonplaceholder:
    useEffect(()=>{
        // // side effect: fetch data from api
        const fetchData = async() =>{
            const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await api.json();
            console.log(result)  // updating the state with fetch data
            setData(result)
        }
        fetchData(); // calling function fetch

    },[])  // Empty: this effect will run once after the initial render


  return (
    <div>
        <h2>Learning useEffect</h2>
        {data ? (<p>{data.title}</p>):<p>Loading....</p>}
    </div>
  )
}

export default LearnEffect