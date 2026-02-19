// We are trying to create a custome hook for fetching data, in react which is called encapsulation.

import {useState, useEffect} from 'react'

// my custome hook for data fetch:
const useFetch = (url) =>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{

        const fetchData = async () =>{
                try{
                    const apiCall = await fetch(url);
                    const result = await apiCall.json();

                    setData(result)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
        }
        fetchData(); //calling function fetchData
    },[url]);
    return {data,loading,error}
}

export default useFetch;