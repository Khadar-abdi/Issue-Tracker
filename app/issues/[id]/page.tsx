import IssueBadge from '@/app/components/IssueBadge'
import prisma from '@/prisma/client'
import { Button, Heading } from '@radix-ui/themes'
import { Edit } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'


interface props {
    params: { id: string }
}

const page = async ({ params }: props) => {


    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!issue)
        notFound();
 


    return (
        // Issue Details

        <div className='flex flex-row max-w-screen px-20 w-full '>
            <div className='flex flex-col  w-1/2  space-y-4   '>

                <Heading className='text-slate-600 text-4xl font-sans font-medium px-4  '>{issue?.title}</Heading>
                <div className='flex  items-center gap-10 w-full px-4   '>
                    <IssueBadge  Status={issue?.status ?? 'OPEN'}  />
                    <p className='text-slate-500  font-medium text-xs'>{issue?.createdAt.toDateString()} </p>
                </div>


                <div className='w-full h-auto shadow shadow-[#ffeed5] rounded px-4 prose mt-3 '>
                    <ReactMarkdown className='text-slate-500 text-base font-sans tracking-tight mt-2'>{issue?.description}</ReactMarkdown>
                </div> 
            </div>
            <div className='w-fit'>
                <Link href={`/issue/${issue.id}/edit`  } ><Button className='flex flex-row space-x-5' > Edit <Edit/></Button></Link>
            </div>
 
        </div>
    )
}

export default page