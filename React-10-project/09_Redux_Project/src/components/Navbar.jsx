import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className=" flex  justify-between items-center px-5 py-3 bg-blue-900">
        <h2 className="  text-white text-2xl   font-bold capitalize">Media Search</h2>{" "}
      
      <div className="flex gap-5">
        <Link to="/search"> Search</Link>
        <Link to="/collectiion"> Colection</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar
