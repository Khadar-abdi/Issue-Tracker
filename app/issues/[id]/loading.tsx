import delay from 'delay';
import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingIssueDetailsPage =   () => {
  

   
  return (
    <div className='grid grid-cols-2  max-w-screen w-full '>
    <div className='flex flex-col items-center w-full gap-5  '> 
        <div className='w-full'>

    <Skeleton />
        </div>
        <div className='w-full h-[200px] shadow shadow-[#ffeed5] rounded p-4'>
        <Skeleton height={200} />
        </div>

    </div>
    <div className='flex flex-col   items-end mt-5  w-full'> 

        <div className='w-4/6 shadow-sm rounded-md shadow-[#fadb99] p-5 space-y-2 font-sans mt-10   '>
        <div className='flex  items-center gap-10 w-full'>
             

        <Skeleton />
        <Skeleton />
        </div>
        <div className='flex  items-center gap-10 w-full'>
        <Skeleton />
        <Skeleton />
        </div>
        <div className='flex  items-center gap-10 w-full'>
        <Skeleton />
        <Skeleton />
        </div>

       
       

        </div>
        
    </div>
    
    
</div>
  )
}

export default LoadingIssueDetailsPage