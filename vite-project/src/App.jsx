import { useState } from "react"
import "./App.css"


  function App() {
    const [count,setCount]=useState(0)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    /* const handleClick=(name)=>{
      alert("button pressed by "+ name)
    } */

    const handleChange=(event)=>{
      //event.preventDefault(); //prevents the website from refreshing immediately
      console.log(event.target.name);//for form
      console.log(event.target.value)
    }

    const handleSumbit=()=>{
      event.preventDefault();
      alert(`Email: ${email} \nPassword: ${password} \nYou have submitted`);//for form
    }

    //to store the states of the enter text we use handleemail and handlepassword
    const handleEmail=(event)=>{
      setEmail(event.target.value)
    }

    const handlePassword=(event)=>{
      setEmail(event.target.value)
    }

    /* const handleIncrement=()=>{
      setCount((prevCount)=>prevCount+1)
      console.log(count)
    } */

    return (
      <div>
        {/* <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button> */}
        <form onSubmit={handleSumbit}>
          <input type="text" name="email" placeholder="Enter email" onChange={handleEmail}/>
          <input type="password" name="password" placeholder="Enter password" 
          onChange={handlePassword}/>
          <button type="submit">Login</button>
        </form> 
      </div>
  
    )
}

export default App
