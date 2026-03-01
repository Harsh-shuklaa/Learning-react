import React from 'react'

const NavButton = () => {
  return (
    <div>
        <div className=" flex gap-6 font-bold text-white ">
        <button className='h-10 w-20 bg-purple-600  rounded-full'>Log in</button>
        <button className='h-10 w-20 bg-gray-600  rounded-full'>Sign up</button>
      </div>
    </div>
  )
}

export default NavButton
