'use client'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const AssignIssue = ({issue}: {issue: Issue}) => {

    const {data: users, isLoading, error, refetch }=useUser();
    const router = useRouter();

    if(isLoading) return  <Skeleton width='4' height='5' />


    const assignIssue = async (userId: string)=>{
        try {

            await axios.patch(`/api/issue/${issue.id}`,{ 

                assignedToUserId: userId === 'unassigned' ? null : userId, 

                status: "IN_PROGRESS"

            });

            await refetch(); // Refetch the users data

            router.refresh(); // Refresh the page to update all components

        } catch (error) {

            toast.error("Changes couldn't be saved");

        }

  }
  
    return (
        <>
        <Select.Root 
        defaultValue={issue.assignedToUserId || "unassigned"}
        onValueChange={assignIssue}>
            <Select.Trigger placeholder='unassigned' />
            <Select.Content>
                <Select.Group>
                    <Select.Label> Suggestions </Select.Label>
                    <Select.Item value='unassigned'> UnAssigned </Select.Item>
                    {users?.map(user => 
                    (
                        <Select.Item  key={user.id} value={user.id}> {user.name} </Select.Item>
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

const useUser= ()=> useQuery<User[]>({
        queryKey: ['users'],
        queryFn: ()=> axios.get('/api/users').then(res => res.data.user),
        staleTime: 60*1000,
        retry: 3

    })


export default AssignIssue