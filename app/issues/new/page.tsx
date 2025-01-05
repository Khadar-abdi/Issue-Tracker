'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import  {z} from 'zod';
import { IssueSchema } from '@/Schemas/validationSchema';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });



type IssueForm = z.infer<typeof IssueSchema>;


 

const page = () => {

    const router = useRouter();
    const [ error, setError]=useState('');
    const { register, control, handleSubmit, formState:{ errors, isSubmitting} } = useForm<IssueForm>({
        resolver: zodResolver(IssueSchema)
    });


    const onSubmit = async (data: IssueForm ) => {

        try {
            
            const response =await axios.post('/api/issue', data)
            if(response.status === 201){
                router.push('/issues')
            
        }
        } catch (error) {
           setError('An unexpected error occured, please try again.')
       } 




    }


    return (
            <div className='max-w-xl space-y-5'> 
                  <h1 className=' text-slate-400 text-xl my-3 font-sans font-semibold' > Create Issue </h1>

                {error &&  <Callout.Text color='red' className='text-[#f76c6c] text-sm '> {error}</Callout.Text> }

        <form className='flex  flex-col   space-y-5'

            onSubmit={handleSubmit(onSubmit)} >
            {/* creating Issues */}
          

            <TextField.Root className='text-slate-500 font-sans ' placeholder='Issue Title' {...register('title')} />
            { errors.title && <p className='text-red-500'>{errors.title?.message} </p> }
            <Controller
                name='description'
                control={control}
                render={({ field }) => (
                    <SimpleMdeReact {...field} placeholder='Issue Description' className='max-w-full' />
                )}
            />
             { errors.description &&  <p  className='text-red-500'>{errors.description?.message} </p> }
            {/* <SimpleMdeReact placeholder='Issue Description' className='max-w-full'  /> */}

            <Button disabled={isSubmitting} type='submit'  >Submit New Issue {isSubmitting && <LoaderIcon />} </Button>

        </form>
        </div>
    )
}

export default page