import prisma from '@/prisma/client'
import { Button, Table } from '@radix-ui/themes'
import Link from '../../components/customLink'
import React, { useState } from 'react'
import IssueBadge from '../../components/IssueBadge'
import { notFound } from 'next/navigation'


const IssuePage = async() => {
 
  
  const Issues= await prisma.issue.findMany()

  if(!Issues) return notFound();
 
 
 
 
  return (
    <div > 
      <div className='my-5'>

      <Button> <Link href={'/issues/new'}  >  New Issue </Link></Button> 
      </div>

      <Table.Root variant='surface' >
        <Table.Header>
          <Table.Row>
            <Table.Cell className='text-slate-600 font-medium'>Issue</Table.Cell>
            <Table.Cell className='  font-medium text-slate-600'>Status</Table.Cell>
            <Table.Cell className='hidden md:table-cell font-medium text-slate-600' >Created</Table.Cell>
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
       
                
    </div>
  )
}

export const dynamic = 'force-dynamic';

export default IssuePage