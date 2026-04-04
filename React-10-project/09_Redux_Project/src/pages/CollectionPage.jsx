import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { removeCollection, removeToast } from '../redux/feature/collectionSlice';

const CollectionPage = () => {
  const dispatch = useDispatch()



  function removeToCollection(item){
     dispatch(removeCollection(item.id))
     dispatch(removeToast())

  }
  const  collection  = useSelector((state)=> state.collection.items)
  console.log(collection);
  
  return (
    <div className='flex  justify-between w-full items-center  flex-wrap gap-6 overflow-auto p-5'>
  {
    collection.map((item)=>{
    return <div>
       <div className='  relative bg-white w-[18vw] h-80 rounded-md '>
     <div className='h-full'>
       {item.type=="photo" ? <img  className='h-full w-full object-cover object-center rounded'  src={item.src}alt="" />:""}
      {item.type=="video" ? <video className='h-full w-full object-cover object-center rounded' autoPlay loop muted src={item.src}alt="" ></video>:""}
     </div>
     <div  id='bottom' className= 'flex justify-between  gap-5 items-end   w-full  px-6  py-10 absolute bottom-0 text-white '> 
      <h2 className='text-md font-semibold capitalize '>{item.title}</h2>
      <button 
      onClick={()=>{
        removeToCollection(item)
      }}
      className='bg-indigo-600 text-white rounded px-2 py-1 hover:cursor-pointer active:scale-95 font-medium '>
        Remove
        </button>
        <ToastContainer/>
      </div>
     
    </div>
    </div>
    })
  }
    </div>
  )
}

export default CollectionPage
