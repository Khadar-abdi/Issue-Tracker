import { Button } from '@radix-ui/themes'
import {   Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EditIssueButton = ({issueId}: {issueId: number}) => {
  return (

    <Link href={`/issue/${issueId}/edit`  } ><Button className='flex flex-row space-x-5' > Edit <Edit/></Button></Link>
 
  )
}

export default EditIssueButton