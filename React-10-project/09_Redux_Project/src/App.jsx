
import { Outlet } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'

const App = () => {

  

  return (
    <div className='min-h-screen w-full text-white bg-gray-950'>
      <Navbar/>
      
      <Outlet/>
  
   
     
    </div>
  )
}

export default App
