import React,{useEffect, useState} from 'react'
import Card from '../component/Card'

const Home = () => {
  const [user,setUser]=useState([]);
  console.log(user);
  const getuser=async()=>{
      const res =await fetch("https://api.tvmaze.com/search/shows?q=all");
      console.log(res.url);
      setUser(await res.json());
    }
  
   useEffect(()=>{
    getuser();
   },[])
  return (
    <>
        <div className="w-full max-w-6xl mt-2 m-auto  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-around flex-wrap m-2 p-2'>
            
             {
              user.map((ele)=>{
                return(
                  <>
                    <Card details={ele.show}/>
                  </>
                )
              })
             }   
            </div>
        </div>
    </>
  )
}

export default Home