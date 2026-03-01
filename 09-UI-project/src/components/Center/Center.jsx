import React from 'react'
import Numbers from './Numbers'
import Hero from './Hero'

const Center = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
     <Numbers/>
     <Hero/>
    </div>
  )
}

export default Center
