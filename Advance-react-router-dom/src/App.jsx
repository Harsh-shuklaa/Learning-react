import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Arena from './pages/Arena'
import Leaderboard from './pages/Leaderboard'
import Practice from './pages/Practice'
import Stats from './pages/Stats'
import Battle from './pages/Battle'

import Lobby from './pages/Lobby'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
    

    
{/* <Navbar/> */}
     <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/arena' element={<Arena/>} />
      <Route  path='/leaderboard' element={<Leaderboard/>} />
      <Route  path='/battle/:roomId' element={<Battle/>} />
      <Route  path='/practice' element={<Practice/>} />
      <Route  path='/stats' element={<Stats/>} />
      {/* <Route  path='*' element={<NotFound/>} /> */}
  
      <Route  path='/lobby/:roomId' element={<Lobby/>} />

      
     </Routes>
    
    </div>
  )
}

export default App
