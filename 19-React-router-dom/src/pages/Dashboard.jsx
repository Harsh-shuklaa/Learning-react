import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
     
       <Link className='link' to='/dashboard/profile'>Profile</Link>
       <Link className='link' to='/dashboard/setting'>Setting</Link>
      
      <h1>Dashboard</h1>
      <Outlet/>

    </div>
  )
}

export default Dashboard
