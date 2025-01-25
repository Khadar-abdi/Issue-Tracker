'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


const Statuses: {key : number, label: string, value?: Status}[] =[
    {key : 1, label : 'All',   },
    {key : 2, label : 'Open', value: 'OPEN' },
    {key : 3, label : 'In Progress', value: 'IN_PROGRESS' },
    {key : 4, label : 'Done', value: 'DONE' },
]
 

const FilterIssue = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
  

    

  return (
    <Select.Root
    defaultValue={searchParams.get('status') || 'All'}
    onValueChange={(status)=>{
        const params = new URLSearchParams();
        if(status) params.append('status', status)
       if(searchParams.get('orderBy'))
        params.append('orderBy', searchParams.get('orderBy')!)


        const query = params.size ? `?${params.toString()}` : ''
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