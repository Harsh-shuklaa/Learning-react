
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addToast } from '../redux/feature/collectionSlice'
import { ToastContainer, toast } from 'react-toastify';

const ResultCard = ({item}) => {  
  const dispatch = useDispatch() 



function addToCollection (item){
   dispatch(addCollection(item))
   dispatch(addToast())

   
   
   
}
  
  return (
    <div className='  relative bg-white w-[18vw] h-80 rounded-md '>
     <div className='h-full'>
       {item.type=="photo" ? <img  className='h-full w-full object-cover object-center rounded'  src={item.src}alt="" />:""}
      {item.type=="video" ? <video className='h-full w-full object-cover object-center rounded' autoPlay loop muted src={item.src}alt="" ></video>:""}
     </div>
     <div  id='bottom' className= 'flex justify-between  gap-5 items-end   w-full  px-6  py-10 absolute bottom-0 text-white '> 
      <h2 className='text-md font-semibold capitalize '>{item.title}</h2>
      <button 
      onClick={()=>{
        addToCollection(item)
      }}
      className='bg-indigo-600 text-white rounded px-2 py-1 hover:cursor-pointer active:scale-95 font-medium '>
        Save
        </button>
        <ToastContainer/>
      </div>
     
    </div>
  )
}

export default ResultCard;