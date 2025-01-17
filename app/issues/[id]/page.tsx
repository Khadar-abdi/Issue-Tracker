import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './deleteIssueButton'


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

        <div className='flex flex-row flex-wrap max-w-screen    '>
            
                <IssueDetails issue={issue}   />                
         
            <div className='w-fit flex   gap-5 mt-3  '>
                <EditIssueButton  issueId={issue.id} />
                <DeleteIssueButton issueId={issue.id} />
            </div>
 
        </div>
    )
}

export default page