import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./Context/UserContextProvider"



const App = () => {
  
  return (
 <UserContextProvider>
     <div className=''>
    
       <Login/>
     <Profile/>
   
    </div>
 </UserContextProvider>
  )
}

export default App
