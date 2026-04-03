
import React from 'react'

const ResultCard = ({item}) => {   
//  function addToCollection(item){
//  const oldData = JSON.parse(localStorage.getItem("collection")) || []
//  console.log(oldData);
 
//  const newData = [...oldData,item]
//  console.log(newData);

//  localStorage.setItem("collection",JSON.stringify(newData))

 
//  }


function addToCollection (item){
   const oldData =  JSON.parse(localStorage.getItem("collection")) || []
   console.log(oldData);

   const newData = [...oldData,item]
   console.log(newData);

    localStorage.setItem( 'collection',JSON.stringify(newData));
   
   
   
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
      </div>
     
    </div>
  )
}

export default ResultCard;