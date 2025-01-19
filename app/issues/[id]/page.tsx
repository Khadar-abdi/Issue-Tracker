import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './deleteIssueButton'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/auth/authOptions'
import AssignIssue from './assignIssue'


interface props {
    params: { id: string }
}

const page = async ({ params }: props) => {

    const session = await getServerSession(authOptions)
 
    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!issue)
        notFound();
  
    return (
        // Issue Details

        <div className='flex flex-row flex-wrap max-w-screen w-full     '>
            
                <IssueDetails issue={issue}   />                
         
           { session && <div className='flex   justify-center  w-[30%]       mt-3  '>
            <div className=' flex  w-3/5   flex-col    gap-5 mt-3 flex-wrap  '>

                <AssignIssue issue={issue}/>
                <EditIssueButton  issueId={issue.id} />
                <DeleteIssueButton issueId={issue.id} />
            </div>
            </div>}
 
        </div>
    )
}

export default page