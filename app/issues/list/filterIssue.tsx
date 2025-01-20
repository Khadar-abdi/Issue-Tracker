'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'


const Statuses: {key : number, label: string, value?: Status}[] =[
    {key : 1, label : 'All',   },
    {key : 2, label : 'Open', value: 'OPEN' },
    {key : 3, label : 'In Progress', value: 'IN_PROGRESS' },
    {key : 4, label : 'Done', value: 'DONE' },
]
 

const FilterIssue = () => {
    const router = useRouter();

    

  return (
    <Select.Root onValueChange={(status)=>{
        const query = status==='All' ? '?': `?status=${status}`
        router.push(`/issues/list${query}`)

    }}>
        <Select.Trigger placeholder='filter by status...' />
        <Select.Content>
            { Statuses.map((status)=>(
                <Select.Item key={status.key} value={status.value || 'All'}>{status.label} </Select.Item>
            ))}

        </Select.Content>
    </Select.Root>
  )
}

export default FilterIssue