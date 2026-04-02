import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setActiveTab,
  setResult,
  setLoading,
  setError,
} from "../redux/feature/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if(!query) return
   try {
     const getData = async () => {
      let data=[];
      if (activeTab == "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          url: item.urls.full,
        }));
        
      } if (activeTab == "videos") {
        let response = await fetchVideos(query);
        data = response.data.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
        }));
      }
      dispatch(setResult(data))
    };
    getData();
    
   } catch (err) {
    dispatch(setError(err.message))
   }
  }, [query, activeTab]);

  if(error) return  <h1>Error</h1>
  if(loading) return  <h1>Loading....</h1>


  return (
    <div className="flex  justify-between w-full items-center  flex-wrap gap-6 overflow-auto p-5">
      {
        result.map((item,idx )=>{
        return <ResultCard  key={idx} item={item}/>
        })
      }
    </div>
  );
};

export default ResultGrid;
