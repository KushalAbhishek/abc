import Profile from "./Profile.jsx"
import ProductCard from "./ProductCard.jsx"
import Greeting from "./Greeting.jsx"
import "./App.css"

  function App() {
  const name = "Kushal";
  const age = 21 ;
  const isStudent = true ;
  const course = "B.tech (CSE)";
  const rollNo = "23VV1A0527";
  const booGr = "O+ve";
  const doB = "08/09/2004";

  const productName = "Chocolate";
  
  
  return (
    <div>
    <Profile />
    <div className="cart">
      <div className="pro1">
        <ProductCard className="c1" recievedName={productName} price={5000} isAvailable={true}/>
      </div>
        
      <div className="pro2">
        <ProductCard className="c2" recievedName={productName} price={5000} isAvailable={false}/>
      </div>
        
    </div>
    

    <div className="iD">
      <Greeting  recievedName={name} course={course} rollNo={rollNo} booGr={booGr} doB={doB}/>
    </div>
    
      
    </div>
  )
}

export default App
