import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'
import DeleteIssueButton from './deleteIssueButton'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/auth/authOptions'
import AssignIssue from './assignIssue'
import Comments from './comments'
import AddComment from './addComment'
import { Container, Flex, Grid } from '@radix-ui/themes'
import { cache } from 'react'


interface props {
    params: { id: string }
}

const fetchIssue = cache((issueId: number)=>    prisma.issue.findUnique({where: {id: issueId}}))
        
    

const page = async ({ params }: props) => {
    const { id } = await params

    const session = await getServerSession(authOptions)

    const issue = await fetchIssue(parseInt(id))

    if (!issue)
        notFound();

    return (
        // Issue Details
        
        
            <Flex direction='row' gap='2' className='col-span-2 w-full' align='start' >
            <Flex direction='column' className='  w-2/3 ' gap='2'  >
                <IssueDetails issue={issue} />
                <Comments issueId={issue.id} />
            </Flex>
            <Flex direction='row' gap='2' className=' p-5 w-1/3'>
                {session && <div className='flex  flex-col  justify-center    w-full gap-5     '>
                     

                        <AssignIssue issue={issue} />
                        <EditIssueButton issueId={issue.id} />
                        <DeleteIssueButton issueId={issue.id} />

                        <AddComment issueId={issue.id} />
 
                </div>}
            </Flex>
            </Flex>
     
     

        
    )
}

export async function generateMetadata({params}: props) {
    const issue = await  fetchIssue(parseInt(params.id))
    return {
        title: issue?.title,
        description: `Details of issue ${issue?.id}`
    }
}

export default page