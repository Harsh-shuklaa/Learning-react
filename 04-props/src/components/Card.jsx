import React from 'react'

const Card = ( props) => {
     console.log(props);
  return (
   
    

      <div className='Card'>
        
        <img src={props.img} alt="" />
        <h1>{props.user} , {props.age  }</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, delectus.</p>
      <button>view profile</button>
      </div>
      
    
  )
}

export default Card
