import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  //  const changefn = function(e){

  //  }

  const user = {
    name:"Harsh",
    age :22
  }

  const store = localStorage.setItem("user",JSON.stringify(user))
  const str =  JSON.parse(localStorage.getItem("user"))
  console.log(str);
  

  
  return (
    <div>
    <input 
    type="text"
    value={name}
    onChange={(e)=>{
     setName(e.target.value)
    }}
     />
     

     <h2>Your Name : {name}</h2>
    </div>
  )
}

export default App
