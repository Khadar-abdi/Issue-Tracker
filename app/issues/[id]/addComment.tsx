'use client'
import ErrorMessage from '@/app/components/ErrorMessage'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { Comment } from '@prisma/client'
import React from 'react'
import { z } from 'zod'
import { CommentSchema } from '@/Schemas/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


type FormComment = z.infer<typeof CommentSchema>
interface props {
    issueId?: number,
    
}

const AddComment = ({   issueId }: props) => {
    
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormComment>({
        resolver: zodResolver(CommentSchema)
    });

    const onSubmit = async (data: FormComment) => {
        try {
            const res = await axios.post(`/api/issue/${issueId}/comments`, data);
            reset();
            router.refresh();
            //  data
            // //   userId: session?.user.id,
            // //   issueId: issueId

            // router.push('/issues/list')

           


        } catch (error) {
            console.error(error);
            // alert(error.response?.data?.error || "Failed to submit comment");
            
        }
    }
    return (
        <div>
            <form className='flex  flex-col   space-y-5'

                onSubmit={handleSubmit(onSubmit)} >
                {/* creating Issues */}


                <TextArea className='text-slate-500 font-sans ' placeholder='Issue Title' {...register('content')} />

                {<ErrorMessage>{errors?.content?.message} </ErrorMessage>}

                <Button type='submit' className='bg-slate-400 text-white p-2 rounded-md' disabled={isSubmitting} >
                    {isSubmitting && <Loader />} Add Comment
                </Button>
            </form>
        </div>
    )
}

export default AddComment