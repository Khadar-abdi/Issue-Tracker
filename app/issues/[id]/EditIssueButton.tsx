import { Button } from '@radix-ui/themes'
import classNames from 'classnames'
import {   Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EditIssueButton = ({issueId}: {issueId: number}) => {
  return (
    <>

    <Button className='flex w-full flex-row space-x-5' > <Link href={`/issues/edit/${issueId}`} className='flex flex-row' > Edit <Edit/> </Link></Button>
    </>
 
  )
}

export default EditIssueButton