function ProductCard({recievedName,price,isAvailable}){
   
  return (
    <div>
      <p>Product : {recievedName}</p>
      <p>price : {price}</p>
      <p>{isAvailable===true?"In stock":"Out of Stock"}</p>
    </div>
  )
}

export default ProductCard