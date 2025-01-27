import { Status } from '@prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
 


interface props {
    open: number,
    inProgress: number,
    done: number,
}


const IssuesSummary = ({ open, inProgress, done }: props) => {
    const Containers: {
        label: string,
        value: number,
        status: Status
    }[] = [
            { label: 'Open', value: open, status: 'OPEN' },
            { label: 'In Progress', value: inProgress, status: 'IN_PROGRESS' },
            { label: 'Done', value: done, status: 'DONE' }
        ]
    return (
        <Flex  gap='4' align='start' className='w-full '>
            {Containers.map((container) => (
                <Card className='w-1/3 '>
                    <Flex direction='column' key={container.status} gap='2' align='center' className='w-full'>
                        <Link href={`/issues/list?status=${container.status}`} className='text-slate-600 text-lg sm:text-base font-sans font-semibold '> {container.label} Issues</Link>
                        <Text className='text-2xl sm:text-lg text-slate-700 font-mono font-semibold'>{container.value}</Text>

                    </Flex>

                </Card>
            ))}
        </Flex>
    )
}

export default IssuesSummary