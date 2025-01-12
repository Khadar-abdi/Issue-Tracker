 'use client'
import { IssueSchema } from '@/Schemas/validationSchema';
import ErrorMessage from '@/app/components/ErrorMessage';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, Spinner, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), 
{
    ssr: false ,
   
    });



type IssueForm = z.infer<typeof IssueSchema>;

interface props{
    issue?: Issue
}


const IssueForm =   ({issue}: {issue?: Issue}) => {

    const router = useRouter();
    const [error, setError] = useState('');
    const { register, control, handleSubmit, formState: { errors, isSubmitting } } = useForm<IssueForm>({
        resolver: zodResolver(IssueSchema)
    });
 
    const onSubmit = async (data: IssueForm) => {

        try {

            if(issue) 
            await axios.patch(`/api/issue/${issue.id}`, data)
             else 
            await axios.post('/api/issue', data)

             
            router.push('/issues/list')
            router.refresh();

           

           
        } catch (error) {
            setError('An unexpected error occured, please try again.')
            console.log(error)
        }
 
    }
 
    return (
        <div className='max-w-xl space-y-5'>
            <h1 className=' text-slate-400 text-xl my-3 font-sans font-semibold' > {issue ? 'Edit  ' : '  New  ' } Issue </h1>

            {error && <Callout.Text color='red' className='text-[#f76c6c] text-sm '> {error}</Callout.Text>}

            <form className='flex  flex-col   space-y-5'

                onSubmit={handleSubmit(onSubmit)} >
                {/* creating Issues */}


                <TextField.Root className='text-slate-500 font-sans ' defaultValue={issue?.title} placeholder='Issue Title' {...register('title')} />
                {<ErrorMessage>{errors.title?.message} </ErrorMessage>}
                <Controller
                    name='description'
                    defaultValue={issue?.description}
                    control={control}
                    render={({ field }) => (
                        <SimpleMdeReact {...field} placeholder='Issue Description'  className='max-w-full' />
                    )}
                />
                {<ErrorMessage>{errors.description?.message} </ErrorMessage>}
             

                <Button disabled={isSubmitting} type='submit'  > {issue ? 'Edit Issue' : 'Submit New Issue' }  {isSubmitting && <Spinner />} </Button>

            </form>
        </div>
    )
}

export default IssueForm