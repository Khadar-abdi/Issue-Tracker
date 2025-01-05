'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
// import SimpleMdeReact from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });


interface IssueForm {
    title: string;
    description: string;
}


const page = () => {

    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>();


    const onSubmit = async (data: IssueForm ) => {

       const response =await axios.post('/api/issue', data)
       if(response.status === 201){
           router.push('/issues')
       } 




    }


    return (
        <form className='flex max-w-xl flex-col   space-y-5'
            onSubmit={handleSubmit(onSubmit)} >
            {/* creating Issues */}
            <h1 className=' text-slate-400 text-xl font-sans font-semibold' > Create Issue </h1>

            <TextField.Root className='text-slate-500 font-sans ' placeholder='Issue Title' {...register('title')} />
            <Controller
                name='description'
                control={control}
                render={({ field }) => (
                    <SimpleMdeReact {...field} placeholder='Issue Description' className='max-w-full' />
                )}
            />
            {/* <SimpleMdeReact placeholder='Issue Description' className='max-w-full'  /> */}

            <Button type='submit'>Submit New Issue</Button>

        </form>
    )
}

export default page