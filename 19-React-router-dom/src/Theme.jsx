import React from 'react'

const Theme = (props) => {
   console.log(props);
   
 const changetheme= function(){
    props.setTheme("dark")
    
 }
  return (
    <div>
      
      <button onClick={changetheme}>Change theme </button>
    </div>
  )
}

export default Theme
