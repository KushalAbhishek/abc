import "./ProductCard.css"

function ProductCard({recievedName,price,isAvailable}){
   
  return (
    <div className="main">
      <p className="na">Product : {recievedName}</p>
      <p className="pi">price : {price}</p>
      <p style={{ color: isAvailable ? "green" : "red" }}>
        {isAvailable ? "In stock" : "Out of Stock"}
      </p>

    </div>
  )
}

export default ProductCard