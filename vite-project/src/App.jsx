import Profile from "./Profile.jsx"
import ProductCard from "./ProductCard.jsx"
import Greeting from "./Greeting.jsx"

function App() {
  const name = "Abhi";
  const age = 21 
  const isStudent = true 

  const productName = "Laptop";
  
  
  return (
    <>
    <Profile />
    <ProductCard recievedName={productName} price={10000} isAvailable={true}/>
    <Greeting recievedName={name} />
      
    </>
  )
}

export default App
