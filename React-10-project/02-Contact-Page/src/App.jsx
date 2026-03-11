import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

import { Route, Router, Routes } from 'react-router-dom'
import Contact from './pages/COntact'
import Hero from './components/Hero'


const App = () => {
  return (
    <div className='min-h-screen bg-black'>
     <Navbar/>
  
     

    <Routes>
        <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>

      
    
    </div>
  )
}

export default App
