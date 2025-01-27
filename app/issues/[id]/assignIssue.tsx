'use client'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const AssignIssue = ({issue}: {issue: Issue}) => {

    const {data: users, isLoading, error}=useUser();
  

    if(isLoading) return  <Skeleton width='4' height='5' />


    const assignIssue =  (userId: string)=>{
        axios.patch(`/api/issue/${issue.id}`,{ assignedToUserId: userId === 'unassigned' ? null : userId,}).
        catch(()=>[
          toast.error("Change could'nt be saved")
        ])
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