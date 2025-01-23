 
import prisma from '@/prisma/client'
import { Button, Table } from '@radix-ui/themes'
import Link from '../../components/customLink'
import NextLink  from 'next/link'
import React, { useState } from 'react'
import IssueBadge from '../../components/IssueBadge'
import { notFound } from 'next/navigation'
import IssueActions from './IssueActions'
import { Issue, Status } from '@prisma/client'
import { ArrowUp, ArrowUpFromDotIcon } from 'lucide-react'
import Pagination from '@/app/components/pagination'
 
 


interface props{
 searchParams: {status: Status, orderBy: keyof Issue , page: string}
}

const columns: {label : string; value: keyof Issue; className? : string}[] = [
  { label : 'Issue', value: 'title', className:'text-slate-600 font-medium' },
  { label : 'Status', value: 'status', className:'font-medium text-slate-600' },
  { label : 'createdAt', value: 'createdAt', className: 'hidden md:table-cell font-medium text-slate-600'  }
]
const IssuePage = async({searchParams}: props) => {

  const pageSize = 10;
  const Currentpage = parseInt(searchParams.page) || 1;
 
  const SearchParams = await searchParams;
  const statuses = Object.values(Status)  
  const status = statuses.includes(SearchParams.status) ? SearchParams.status : undefined
  const orderBy = columns.map((column)=> column.value).includes(SearchParams.orderBy) ? {[SearchParams.orderBy]: 'asc'} : undefined
  const where = {status}
 
  
  const Issues= await prisma.issue.findMany({
    where ,
    orderBy,
    skip: (Currentpage - 1) * pageSize,
    take: pageSize
  })

  const issueCount= await prisma.issue.count({
    where 
  }) 

  if(!Issues) return notFound();
 
 
 
 
  return (
    <div  > 
      <IssueActions/>   
      <Table.Root variant='surface' >
        <Table.Header>
          <Table.Row>
            {columns.map(column=>(

              <Table.ColumnHeaderCell key={column.value} className={column.className} > 
                <NextLink href={{
                  query: { ...SearchParams, orderBy: column.value}
                }}> {column.label} </NextLink>
                {column.value === SearchParams.orderBy &&  <ArrowUp size={15}  className='inline ' />}
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
        <Pagination currentPage={Currentpage} pageSize={pageSize} itemCount={issueCount}  />
       
                
    </div>
  )
}

export const dynamic = 'force-dynamic';

export default IssuePage