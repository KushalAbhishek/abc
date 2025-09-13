import "./App.css"


  function App() {

    const handleClick=(name)=>{
      alert("button pressed by "+ name)
    }

    return (
      <div>
        <p>This is a Button</p>
      <button onClick={()=>handleClick("Abhishek")}>Button</button>
      </div>
  
    )
}

export default App
