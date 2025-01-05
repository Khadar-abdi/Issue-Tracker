import { Status } from '@prisma/client'
import React from 'react'
import   { Badge }  from '@radix-ui/themes'

 
const StatusMap: Record<Status, {label: string, color: 'red'|'purple'|'green'}> = {
    OPEN: {label: 'Open', color: 'red'},
    IN_PROGRESS: {label: 'In Progress', color: 'purple'},
    DONE: {label: 'Done', color: 'green'}
}

const IssueBadge = ({Status}: { Status: Status}) => {
  return (
     <Badge color={StatusMap[Status].color}>
         {StatusMap[Status].label}
     </Badge>
  )
}

export default IssueBadge