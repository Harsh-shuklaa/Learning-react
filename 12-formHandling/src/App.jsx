import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault()

 
   
    
  }
  
  return (
    <div>
      <form onSubmit={function(e){
        submitHandler(e)
      }} >
        <input type="text" placeholder='Enter Your Name' />
        <button >Click</button>
      </form>
    </div>
  )
}

export default App
