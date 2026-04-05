import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/feature/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch()
 const clearAll = ()=>{
   dispatch(clearCollection())
 }
  // console.log(collection);

  return (
    <div className="overflow-auto p-5">
      <div className=" flex justify-between p-5">
        <h2 className=" text-xl font-bold ">Your Collection</h2>
        <button  onClick={clearAll} className="bg-red-700 text-white rounded px-4 py-2 active:scale-95 hover:cursor-pointer">
          Delete all
        </button>
      </div>

      <div className="flex  justify-between w-full items-center  flex-wrap gap-6 ">
        {collection.map((item, idx) => {
          return (
            <div key={idx} >
              <CollectionCard  item={item} />
            </div>
          );
        })}
      </div> 
    </div>
  );
};

export default CollectionPage;
