import prisma from '@/prisma/client'
import { Avatar, Card, Flex } from '@radix-ui/themes'
import React from 'react'

const Comments = async ({ issueId }: { issueId: number }) => {

    const comments = await prisma.comment.findMany({
        where: {
            issueId
        },
        include: {
            user: true
        }
    })


  

    return (
        <>
        <Card>
        {comments ? (
             comments.map(comment => (
                <Flex key={comment.id} direction='row' className=' gap-3 px-3 py-5 border-b-2 border-slate-50 items-start  '   >
                   

                        <Avatar src={comment.user.image!} fallback='?' size='1' radius='full' />
                        <Flex direction='column' gap='2' >
                            <p className='text-slate-900 font-sans font-semibold text-sm'>{comment.user.name}</p>
                            <p className='font-sans text-slate-700 text-justify'>{comment.content}</p>
                        
                        </Flex>


                </Flex>
            ))
        ) : (
            <p className='text-slate-400 text-sm justify-center items-center'>No comments available</p>
        )}

           

  
        </Card>
        </>
    )
}

export default Comments