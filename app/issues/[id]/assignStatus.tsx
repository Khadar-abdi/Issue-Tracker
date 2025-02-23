'use client'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const AssignStatus = ({issue}: {issue: Issue}) => {

    // const {data: users, isLoading, error}=useUser();
    const router = useRouter();

    // assign issue status 
    const statuses = [
        {label: 'Open', value: 'OPEN'},
        {label: 'In Progress', value: 'IN_PROGRESS'},
        {label: 'Done', value: 'DONE'},
    ]


  

    // if(isLoading) return  <Skeleton width='4' height='5' />

    const assignStatus = async (status: string) => {
        try {

            await axios.patch(`/api/issue/${issue.id}`, { status });

            router.refresh(); // Refresh the page to update all components

        } catch (error) {

            toast.error("Changes couldn't be saved");

        }
    }
    
  
    return (
        <>
        <Select.Root 
        defaultValue={issue.status}
        onValueChange={assignStatus}>
            <Select.Trigger placeholder='open' />
            <Select.Content>
                <Select.Group>
                    <Select.Label> Suggestions </Select.Label>
                    
                    {statuses?.map(status => 
                    (
                        <Select.Item  key={status.value} value={status.value}> {status.label} </Select.Item>
                    )
                    )}
                       


                </Select.Group>

            </Select.Content>
        </Select.Root>
        <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
        </>
    )
}

// const useUser= ()=> useQuery<User[]>({
//         queryKey: ['users'],
//         queryFn: ()=> axios.get('/api/users').then(res => res.data.user),
//         staleTime: 60*1000,
//         retry: 3

//     })


export default AssignStatus