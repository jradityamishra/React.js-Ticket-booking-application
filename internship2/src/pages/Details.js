import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
const Details = () => {
  
   const location=useLocation();
   const data=location.state.details;
   console.log(data.details)
   
  return (
   <>
    
<div className="m-2 p-2 flex justify-center">
<div class="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a className='flex justify-center' href="#">
        <img class="p-8 max-w-2xl max-h-96 rounded-t-lg " src={data.image.original} alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div className=' '>
      <a href="#" className='flex justify-center m-2'>
            <h5 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
       
           
        </a>
        <div className='flex flex-col items-center'>
        <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">{data.summary}</p>
        <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">language:-{data.language}</h2>
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Runtime:-{data.runtime}</h2>
            
            <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">geres:-{data.genres}</p>
            <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">type:-{data.type}</p>
            <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">premiered:-{data.premiered}</p>
            <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">officialSite:-{data.officialSite}</p>
            <p class="text-sm mt-2 mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">weight:-{data.weight}</p>
        </div>
        <div class="flex justify-center mt-2.5 mb-5">
           
        <h3>Rating-<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
         5.0
            </span></h3>
        </div>
      </div>
        <div class="flex items-center justify-between">
            {/* <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span> */}
            <a href="#" class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BOOK YOUR SHOW</a>
        </div>
    </div>
</div>

</div>
   </>
  )
}

export default Details