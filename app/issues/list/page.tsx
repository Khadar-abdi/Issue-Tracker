 
import prisma from '@/prisma/client'
import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import IssueActions from './IssueActions'
import { Issue, Status } from '@prisma/client'
import Pagination from '@/app/components/pagination'
import IssueTable, { columnsName, IssueQuery } from './issueTable'
import { Flex } from '@radix-ui/themes'
import { Metadata } from 'next'

 
 


interface props{
 searchParams: IssueQuery
}


const IssuePage = async({searchParams}: props) => {

  const pageSize = 10;
  const Currentpage =   parseInt(searchParams.page) || 1;

 
  const SearchParams = await searchParams;
  const statuses = Object.values(Status)  
  const status = statuses.includes(SearchParams.status) ? SearchParams.status : undefined
  const orderBy = columnsName
  .includes(SearchParams.orderBy) ?
   {[SearchParams.orderBy]: 'asc'} : undefined
  const where = {status}
 
  
  const Issues= await prisma.issue.findMany({
    where ,
    orderBy,
    skip: (Currentpage - 1) * pageSize,
    take: pageSize,
   
  })

  const issueCount= await prisma.issue.count({
    where 
  }) 

  if(!Issues) return notFound();
 
 
 
 
  return (
    <Flex direction='column' gap='4'  > 
      <IssueActions/>   
      <IssueTable searchParams={SearchParams} Issues={Issues}/>
     
        <Pagination currentPage={Currentpage} pageSize={pageSize} itemCount={issueCount}  />
       
                
    </Flex>
  )
}

export const dynamic = 'force-dynamic';

export const  metadata: Metadata ={

  title: 'Issue-Tracker - Issue List',
  description: 'View all of the Issue project',
 
}

export default IssuePage