import React, {useState, useMemo} from 'react'

const Memo = () => {


    const [inputValue, setInputValue]=useState(' ');

    // This is our expensive calcualtion:
    const calculationResult = (input) =>{
        console.log("Calculating Result:")
        return input.length*50;
    }

    // We will memorize result of the calcuation based on the input value:

    const memorizedResult = useMemo(()=>{
        return calculationResult(inputValue)
    },[inputValue])
    console.log(memorizedResult)

  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value)
        }}/>
        <p>Result: {memorizedResult}</p>
    </div>
  )
}

export default Memo