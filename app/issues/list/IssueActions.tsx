import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import FilterIssue from './filterIssue'

const IssueActions = () => {
  return (
 <div className='my-5 flex flex-row justify-between'>
    <FilterIssue/>

      <Button> <Link href={'/issues/new'}  >  New Issue </Link></Button> 
      </div>
  )
}

export default IssueActions