import React, { useReducer } from 'react'
import './LearningReducer.css'

// Reducer function: and its logic
const counterReducer = (state,action) =>{
            switch(action.type){
                case "INCREMENT":
                    return {count: state.count + 1};
                case "DECREMENT":
                    return {count: state.count - 1};
                case "RESET":
                    return {count: 0};
                default:
                    return state;
            }
     }

const LearningReduce = () => {

    const[state,dispatch] = useReducer(counterReducer, {count: 0})

  return (
    <div className='counter-container'>
        <h1>Learning about useReducer</h1>
        <h2>useReducer Counter:</h2>
        <h3 className='counter-display'>{state.count}</h3>
        <button className='increment-btn' onClick={()=>{
            dispatch({type: "INCREMENT"})
        }}>INCREMENT</button>
        <div className='button-group'>
            <button className='decrement-btn' onClick={()=>{
            dispatch({type: "DECREMENT"})
        }}>DECREMENT</button>
        <button className='reset-btn' onClick={()=>{
            dispatch({type: "RESET"})
        }}>RESET</button>
        </div>
        
        
    </div>
  )
}

export default LearningReduce