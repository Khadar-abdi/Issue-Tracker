import IssueBadge from '@/app/components/IssueBadge'
import { Issue } from '@prisma/client'
import { Heading } from '@radix-ui/themes'
 
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (
    <div className='flex flex-col  w-4/5 space-y-4   '>
        <Heading className='text-slate-600 w-full text-4xl font-sans font-medium px-4  '>{issue?.title}</Heading>
                <div className='flex flex-row items-center gap-4 w-full px-4   '>
                    <IssueBadge  Status={issue?.status ?? 'OPEN'}  />
                    <p className='text-slate-500  font-medium text-xs'>{issue?.createdAt.toDateString()} </p>
                </div>


                <div className='shadow-sm shadow-[#ffe396] px-5 py-5 '>

                    <ReactMarkdown className='text-slate-800  w-full text-base font-sans tracking-tight mt-2 text-justify'>{issue?.description}</ReactMarkdown>
                </div>
               
    </div>
  )
}

export default IssueDetails