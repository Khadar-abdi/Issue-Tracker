import IssueBadge from '@/app/components/IssueBadge'
import prisma from '@/prisma/client'
import { Heading } from '@radix-ui/themes'
 
import { notFound  } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'
 

interface props{
    params:{ id: string}
}

const page = async ({params}: props) => {
    

    const issue = await prisma.issue.findUnique({
        where:{
            id: parseInt(params.id)
        }
    })

    if(!issue)
        notFound();

 

  return (
    // Issue Details
     
    <div className='grid grid-cols-2  max-w-screen w-full '>
        <div className='flex flex-col px-10 w-full   '> 
            <Heading className='text-slate-600 text-4xl font-sans font-medium px-4'>{issue?.title}</Heading>
            <div className='w-full h-auto shadow shadow-[#ffeed5] rounded px-4 prose'>
                <ReactMarkdown className='text-slate-500 text-base font-sans tracking-tight'>{issue?.description}</ReactMarkdown>
            </div>

        </div>
        <div className='flex flex-col   items-end mt-5  w-full'> 

            <div className='w-4/6 shadow-sm rounded-md shadow-[#fadb99] p-5 space-y-2 font-sans mt-10   '>
            <div className='flex  items-center gap-10 w-full'>
                <span className='text-slate-500 text-sm font-medium font-sans'>Status :</span>

            <IssueBadge  Status={issue?.status ?? 'OPEN'}  />
            </div>
            <div className='flex  items-center gap-10 w-full'>
                <span className='text-slate-500 text-sm font-medium font-sans'>Created At :</span>

                <p className='text-slate-500  font-medium text-sm'>{issue?.createdAt.toDateString()} </p>
            </div>
            <div className='flex  items-center gap-10 w-full'>
                <span className='text-slate-500 text-sm font-medium font-sans'>Updated At :</span>

                <p className=' text-slate-500 font-medium text-sm'>{issue?.updatedAt.toDateString()} </p>
            </div>

           
           

            </div>
            
        </div>
        
        
    </div>
  )
}

export default page