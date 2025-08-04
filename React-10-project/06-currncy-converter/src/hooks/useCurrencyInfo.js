 import { useEffect,useState } from "react";



 

  function useFetch (url){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        async function fetchData(){
          try{
              setLoading(true);
              const res =  await fetch(url)
            const data =  await res.json();
            setData(data);
          }catch(err){
        setError(err);
          }finally{
          setLoading(false);
          }
        }
        fetchData();
    },[url]);

    return {data, loading, error};
}

 export default useFetch