
import { Outlet } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import { addCollection } from './redux/feature/collectionSlice'

const App = () => {

  

  return (
    <div className='min-h-screen w-full text-white bg-gray-950'>
      <Navbar/>
      
      <Outlet/>

      <button onClick={addCollection}>click</button>
  
   
     
    </div>
  )
}

export default App
