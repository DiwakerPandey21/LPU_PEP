import './TestMyLuck.css'

const TestMyLuck = () => {

    const randomNum = Math.floor(Math.random()*10+1);
    const luckyNum = 3;

  return (
    <div className="basic-jsx-container">
        <h1>Using Js in JSX:</h1>
        <p>Current Number is:{randomNum} {randomNum === luckyNum ? <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbThmOHl4OHE2ajRwZGE4OWFxd3VpZXBpYmJkdnkweG45d2FvbGgwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jp4dchTKX6BzGkZ5DL/giphy.gif">
        </img> : <p>Your a bad a lucky one</p>
        } 
        </p>
        
    </div>
  )
}

export default TestMyLuck