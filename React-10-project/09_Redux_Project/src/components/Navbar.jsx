import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className=" flex  justify-between items-center px-5 py-3 bg-blue-900">
        <h2 className="  text-white text-2xl   font-bold capitalize">Media Search</h2>{" "}
      
      <div className="flex gap-5">
        <Link  className='bg-white px-3 py-1 rounded text-black active:scale-95 hover:cursor-pointer ' to="/home"> Search</Link>
        <NavLink  className={({isActive})=>` bg-white px-3 py-1 rounded text-black active:scale-95 hover:cursor-pointer  ${isActive ? "" : ""}`}   to="/collectiion"> Collection</NavLink>
      </div>
      </div>
    </div>
  )  
}

export default Navbar
