import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'


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

        <div className='flex flex-row flex-wrap max-w-screen px-20 w-full  '>
            <div className='flex flex-col  w-1/2  space-y-4   '>
                <IssueDetails issue={issue} />                
            </div>
            <div className='w-fit'>
                <EditIssueButton issueId={issue.id} />
            </div>
 
        </div>
    )
}

export default page