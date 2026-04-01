import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/feature/searchSlice'

const Tabs = () => {
  const dispatch= useDispatch()
  const activeTab = useSelector((state)=>{
   return state.search.activeTab
    
    
  })
  const tabs = ["photos","videos" ]
  return (
    <div className='flex items-center  justify-center gap-10 p-10'>
      {tabs.map((elem,idx)=>{
        return (
          <button
          onClick={()=>{
dispatch(setActiveTab(elem))
          }} 
          key={idx} className={` ${activeTab==elem ?" bg-blue-600" :  " transition bg-gray-600"} text-lg text-white hover:cursor-pointer active:scale-95 rounded   px-5 py-2 uppercase ` }>
          {elem}
         </button>

        )
      })}
    </div>
  )
}

export default Tabs
