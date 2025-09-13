import { useState } from "react"
import "./App.css"


  function App() {
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
      setCount((prevCount)=>prevCount+1)
      console.log(count)
    }

    const handleClick=(name)=>{
      alert("button pressed by "+ name)
    }

    const handleSumbit=()=>{
      alert("You have submitted");
    }

    const handleChange=(event)=>{
      event.preventDefault(); //prevents the website from refreshing immediately
      console.log(event.target.name);
      console.log(event.target.value)
    }

    return (
      <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <form onSubmit={handleSumbit}>
          <input type="text" name="email" placeholder="Enter email" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Enter password" 
          onChange={handleChange}/>
          <button type="submit">Login</button>
        </form> 
      </div>
  
    )
}

export default App
