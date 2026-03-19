import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();

  return (
    <div className=''>
      <h1 className='text-2xl bg-gray-600 text-center p-4 '>User : {userId} </h1>
    </div>
  )
}

export default User
