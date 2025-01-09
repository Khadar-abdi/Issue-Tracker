import IssueBadge from '@/app/components/IssueBadge'
import { Issue } from '@prisma/client'
import { Heading } from '@radix-ui/themes'
 
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (
    <>
        <Heading className='text-slate-600 text-4xl font-sans font-medium px-4  '>{issue?.title}</Heading>
                <div className='flex  items-center gap-10 w-full px-4   '>
                    <IssueBadge  Status={issue?.status ?? 'OPEN'}  />
                    <p className='text-slate-500  font-medium text-xs'>{issue?.createdAt.toDateString()} </p>
                </div>


                <div className='w-full h-auto shadow shadow-[#ffeed5] rounded px-4 prose mt-3 '>
                    <ReactMarkdown className='text-slate-500 text-base font-sans tracking-tight mt-2'>{issue?.description}</ReactMarkdown>
                </div> 
    </>
  )
}

export default IssueDetails