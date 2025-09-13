import Profile from "./Profile.jsx"
import ProductCard from "./ProductCard.jsx"

function App() {
  const name = "Abhi";
  const age = 21 
  const isStudent = true 

  const productName = "Laptop";
  
  
  return (
    <>
    <Profile />
    <ProductCard recievedName={productName} price={10000} isAvailable={true}/>
      
    </>
  )
}

export default App
