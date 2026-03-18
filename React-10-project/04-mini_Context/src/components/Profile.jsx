import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContextProvider'

const Profile = () => {

  const {user} = useContext(UserContext);
// console.table(user)
  
  return (
    <div>
     {
     (!user) ? (<div className='w-full max-w-md m-auto  text-red-700 text-center'><h1 className=' m-5 text-2xl font-bold'>Please Login !</h1></div>):(<div className='w-full max-w-md m-auto  text-blue-700 text-center'> <h1 className='m-5  font-bold text-2xl'>Welcome {user.username}</h1> </div>)
     }
    </div>
  )
}

export default Profile
