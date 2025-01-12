import { Button } from '@radix-ui/themes'
import { Delete } from 'lucide-react'
 
import Link from 'next/link'
import React from 'react'

 

const DeleteIssueButton = ({issueId}:  { issueId: number} ) => {
  return (
      <Link href={`/issues/${issueId}/edit`  } ><Button color='gray' className='flex flex-row space-x-5 text-sm '  > Delete <Delete/></Button></Link>
  )
}

export default DeleteIssueButton