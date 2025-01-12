'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { Delete } from 'lucide-react'
 
import Link from 'next/link'
import React from 'react'

 

const DeleteIssueButton = ({issueId}:  { issueId: number} ) => {
  return (

    <AlertDialog.Root>
      <AlertDialog.Trigger>
     <Button color='gray' variant='soft' className='flex flex-row space-x-5 text-sm '  > Delete </Button> 

      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>
          Confirm Deletion
        </AlertDialog.Title>
        <AlertDialog.Description>
          Are You sure to Delete Issue
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
			<AlertDialog.Cancel>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button variant="solid" >
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
      </AlertDialog.Content>

    </AlertDialog.Root>
  )
}

export default DeleteIssueButton