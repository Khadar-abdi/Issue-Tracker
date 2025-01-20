'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const Statuses: {key : number, label: string, value?: Status}[] =[
    // {key : 1, label : 'All' },
    {key : 2, label : 'Open', value: 'OPEN' },
    {key : 3, label : 'In Progress', value: 'IN_PROGRESS' },
    {key : 4, label : 'Done', value: 'DONE' },
]

const FilterIssue = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='filter by status...' />
        <Select.Content>
            { Statuses.map((status)=>(
                <Select.Item key={status.key} value={status.value || ''}>{status.label} </Select.Item>
            ))}

        </Select.Content>
    </Select.Root>
  )
}

export default FilterIssue