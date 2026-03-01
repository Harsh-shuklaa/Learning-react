import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
     
       <Link  to='/dashboard/profile'>Profile</Link>
       <Link to='/dashboard/setting'>Setting</Link>
      
      <h1>Dashboard</h1>
      <Outlet/>

    </div>
  )
}

export default Dashboard
