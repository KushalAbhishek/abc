import "./App.css"


  function App() {

    const handleClick=()=>{
      alert("button pressed by")
    }

    return (
      <div>
        <p>This is a Button</p>
      <button onClick={handleClick}>Button</button>
      </div>
  
    )
}

export default App
