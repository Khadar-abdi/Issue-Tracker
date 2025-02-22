import { Avatar, Card, Flex,  Heading,  Table } from '@radix-ui/themes'
import React from 'react'
import IssueBadge from './components/IssueBadge'
import prisma from '@/prisma/client'
import Link from 'next/link'

const LeatestIssue = async () => {

    const Issues = await prisma.issue.findMany({
        take: 5,
        orderBy: {
            createdAt: 'desc'
        },
        include:{
            assignedUser: true
        }
    })

    return (
        <Card className='w-full'>
            <Heading>Leatest Issue</Heading>
            <Table.Root >
            <Table.Body >
                {Issues.map((issue) => (

                    <Table.Row key={issue.id}>
                        <Table.Cell className='text-slate-600  font-sans    '>
                            <Flex  justify='between' >
                            <Flex direction='column' gap='2' align='start'   >

                                <Link href={`/issues/${issue.id}`} className='cursor-pointer'>

                                    {issue.title}
                                </Link>
                                <IssueBadge Status={issue.status} />
                            </Flex>
                            {issue.assignedUser && (
                                <Avatar src={issue.assignedUser.image!} fallback='?' size='2' radius='full'  />
                                )}
                            </Flex>

                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            </Table.Root>

        </Card>
    )
}

export default LeatestIssue