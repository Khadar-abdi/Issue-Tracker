'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
 
import { useRouter } from 'next/navigation'
import { useState } from 'react'
 
 

 

const DeleteIssueButton = ({issueId}:  { issueId: number} ) => {

  const router = useRouter();
  const [error, setError] = useState(false)

const DeleteIssue= async ()=>{

  try {
  

    await axios.delete(`/api/issue/${issueId}`)
    router.push('/issues')
    router.refresh();
    
  } catch (error) {
    setError(true)
    
  }


}

  return (
    <>

    <AlertDialog.Root>
      <AlertDialog.Trigger>
     <Button   variant='soft' className='flex flex-row space-x-5 text-sm '  > Delete </Button> 

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
				<Button  variant="soft"  >
					Cancel
				</Button>
			</AlertDialog.Cancel>
			<AlertDialog.Action>
				<Button onClick={DeleteIssue} variant="solid" >
					Delete Issue
				</Button>
			</AlertDialog.Action>
		</Flex>
      </AlertDialog.Content>

    </AlertDialog.Root>

    <AlertDialog.Root open={error}>
      <AlertDialog.Content>
      <AlertDialog.Title>
          Error
        </AlertDialog.Title>
        <AlertDialog.Description>
          This issue could not be deleted
        </AlertDialog.Description>
        <AlertDialog.Cancel>
				<Button  variant="soft" mt='2'  onClick={()=>setError(false)} >
			Ok
				</Button>
			</AlertDialog.Cancel>
      </AlertDialog.Content>

    </AlertDialog.Root>

    </>
  )
}

export default DeleteIssueButton