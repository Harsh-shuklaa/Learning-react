import React from 'react'

import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data =  useLoaderData(fetchGithubData)
    // const [data, setData] = useState([])

    // useEffect(()=>{
    // async function fetchGithubData (){
    //     const res= await fetch("https://api.github.com/users/Harsh-shuklaa")
    //     const data =await res.json();
    //     console.log(data);
    //     setData(data);
        

    // }
    // fetchGithubData();
    // },[])
  return (
    <div className='flex justify-between m-5  p-10  bg-gray-600'>
     <div>
         <img className='rounded-full border-gray-700   contain-content' src={data.avatar_url} alt="logo"  width={300}/>
         </div>
     <div>Follower: {data.followers}</div>
    </div>
  )
}

export default Github

   export const fetchGithubData = async()=>{
          const res =await fetch("https://api.github.com/users/Harsh-shuklaa");
          return  await res.json();
   }
