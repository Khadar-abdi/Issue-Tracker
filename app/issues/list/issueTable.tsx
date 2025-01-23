import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import IssueBadge from '../../components/IssueBadge'
import Link from '../../components/customLink'
import NextLink  from 'next/link'
import { ArrowUp, ArrowUpFromDotIcon } from 'lucide-react'
import { Issue, Status } from '@prisma/client'


export interface IssueQuery {
    status: Status,
    orderBy: keyof Issue , 
    page: string
}

interface props{
    searchParams:  IssueQuery,
    Issues: Issue[]
   }

const IssueTable = ({searchParams, Issues}: props) => {
  return (
    <Table.Root variant='surface' >
    <Table.Header>
      <Table.Row>
        {columns.map(column=>(

          <Table.ColumnHeaderCell key={column.value} className={column.className} > 
            <NextLink href={{
              query: { ...searchParams, orderBy: column.value}
            }}> {column.label} </NextLink>
            {column.value === searchParams.orderBy &&  <ArrowUp size={15}  className='inline ' />}
           </Table.ColumnHeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body >
      {Issues.map((issue)=>(
       
          <Table.Row key={issue.id}>
            <Table.Cell className='text-slate-600 hover:underline font-sans font-semibold  '>
              <Link    href={`/issues/${issue.id}`}>
              
              {issue.title} 
              </Link>
             
            </Table.Cell>
            <Table.Cell className='  text-slate-600'>
               <IssueBadge  Status={issue.status}  />
               </Table.Cell>
            <Table.Cell className='hidden md:table-cell text-slate-600'>{issue.createdAt.toDateString()}</Table.Cell>
          </Table.Row>
      ))}
    </Table.Body>

  </Table.Root>
  )
}
const columns: {label : string; value: keyof Issue; className? : string}[] = [
    { label : 'Issue', value: 'title', className:'text-slate-600 font-medium' },
    { label : 'Status', value: 'status', className:'font-medium text-slate-600' },
    { label : 'createdAt', value: 'createdAt', className: 'hidden md:table-cell font-medium text-slate-600'  }
  ]

  export const columnsName= columns.map((column)=> column.value)

export default IssueTable