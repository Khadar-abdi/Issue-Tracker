'use client'
import { Card } from '@radix-ui/themes' 
import React from 'react'
import { ResponsiveContainer, XAxis, YAxis, Bar, BarChart} from 'recharts'

interface props {
    open: number,
    inProgress: number,
    done: number,
}

const IssueChart = ({open, inProgress, done}: props) => {
    const data =[
        {label: 'Open', value: open},
        {label: 'In Progress', value: inProgress},
        {label: 'Done', value: done}

    ]
  return (
    <Card className='w-full'>
        <ResponsiveContainer width='' height={300}>
            <BarChart data={data}>
                <XAxis dataKey='label'/>
                <YAxis/>
                <Bar dataKey='value' barSize='30' style={{ fill : 'var(--accent-8)'}} />
            </BarChart >

        </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart