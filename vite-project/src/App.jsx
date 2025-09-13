import "./App.css"


  function App() {

    const handleClick=(name)=>{
      alert("button pressed by "+ name)
    }

    const handleChange=(event)=>{
      console.log(event.target.name);
      console.log(event.target.value)
    }

    return (
      <div>
        <p>This is a Button</p>
        <input type="text" name="email" placeholder="Enter email" onChange={handleChange}/>
        <input type="password" name="password" placeholder="Enter password" 
        onChange={handleChange}/>
        <button onClick={()=>handleClick("Abhishek")}>Button</button>
      </div>
  
    )
}

export default App
