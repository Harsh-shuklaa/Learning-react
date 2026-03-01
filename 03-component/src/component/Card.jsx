import React from 'react'

const Card = () => {
    const user = 'Harsh';
    const age = 22;
  return (
   <>
    <div className='parentCard'>
       
        <div className='Card'>
        <h1>Harsh Shukla</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, amet?</p>
        <p>My name is {user}</p>
        <p>I am {age} year old</p>
      </div>
    </div></>
  )
}

export default Card;
