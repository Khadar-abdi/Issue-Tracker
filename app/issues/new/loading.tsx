import ErrorMessage from '@/app/components/ErrorMessage'
import { TextField, Button, Spinner } from '@radix-ui/themes'
import React from 'react'
import SimpleMdeReact from 'react-simplemde-editor'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const loadingNewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-5'>
    <h1 className=' text-slate-400 text-xl my-3 font-sans font-semibold' > Create Issue </h1>

    

    <form className='flex  flex-col   space-y-5'

          >
        {/* creating Issues */}


      <Skeleton/>
      <Skeleton height={300}/>
      <Skeleton   />
     
       

    </form>
</div>
  )
}

export default loadingNewIssuePage