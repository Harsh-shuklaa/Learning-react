import React, { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState(" ")

  
  
  function submitHandler(e){
    
    console.log(`Form submitted by ${Title}`);

    setTitle("")
    

 
   
    
  }
  
  return (
    <div>
      <form onSubmit={function(e){
        submitHandler(e)
      }} >
        <input onChange={(e)=>{
          setTitle(e.target.value)
    
      
        }} 
        value={Title} type="text" placeholder='Enter Your Name' />
        <button >Click</button>
      </form>
    </div>
  )
}

export default App
