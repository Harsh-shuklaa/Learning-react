import React from 'react'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

function App() {
  return (
    <div>
      <Navbar/>
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default App
