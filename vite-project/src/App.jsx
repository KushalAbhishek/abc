import Profile from "./Profile.jsx"
import ProductCard from "./ProductCard.jsx"
import Greeting from "./Greeting.jsx"
import "./App.css"
import BlogPost from "./BlogPost.jsx"

  function App() {
  /*
  const name = "Kushal";
  const age = 21 ;
  const isStudent = true ;
  const course = "B.tech (CSE)";
  const rollNo = "23VV1A0527";
  const booGr = "O+ve";
  const doB = "08/09/2004";
  
  const productName = "Chocolate";
  const price = 5000;
  const isAvailable = true;
  */

  /* const products=[{
    productName : "Chocolate",
    price : 5000,
    isAvailable : true
  },{
    productName : "Biscuit",
    price : 6000,
    isAvailable : true
  },{
    productName : "Honey",
    price : 7000,
    isAvailable : true
  }] */
  const posts=[
    {
      id:1,
      author:"Kushal Abhishek",
      title:"The Walking Dead",
      description:"zombie book"
    },
    {
      id:2,
      author:"Karan Ashish",
      title:"The art to attract",
      description:"social skill"
    },
    {
      id:3,
      author:"Abhi",
      title:"Cyberpunk",
      description:"Distopian future"
    }
  ]
  
  return (
    <div className="cart">
      {
      posts.map((post)=>(
        <BlogPost
        key={post.id}
        author={post.author}
        title={post.title}
        description={post.description}
        />
      ))
    }
    </div>
    
    
   /*  
   <div className="maincontainer">
        
     {
       products.map((product)=>(
       <ProductCard
       productName={product.productName}
       price={product.price}
       isAvailable={product.isAvailable}
      />
      ))
  }
        
      </div>
   */
   /* 
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
    
      
    </div>*/
    
    
  )
}

export default App
