import "./Greeting.css"

//inline styling (here we use snakeCase = textAlign)
function Greeting(greeting){
  const nameStyle = {
    textAlign: "center",
    color: "blue",
    fontSize: "larger"
  }
  return (
    <div className="ID">
      <p className="vite"><img src="./vite.svg" alt=""/></p>
      <p style={nameStyle}>{greeting.recievedName}</p>
      <p>Course : {greeting.course}</p>
      <p>Roll no: {greeting.rollNo}</p>
      <p>Blood group : {greeting.booGr}</p>
      <p>DOB : {greeting.doB}</p>
    </div>
  )
}

export default Greeting