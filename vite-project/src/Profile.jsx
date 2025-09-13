function Profile(){
  const name = "Abhi";
  const age = 21 
  const isStudent = true 
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>{isStudent===true?"is a student":"not a student"}</p>
    </div>
  )
}

export default Profile