'use client'
import { Button,   TextField } from '@radix-ui/themes'
import React from 'react'
// import SimpleMdeReact from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });


const page = () => {
  return (
    <div className='flex max-w-xl flex-col   space-y-5' >
        {/* creating Issues */}
        <h1 className=' text-slate-400 text-xl font-sans font-semibold' > Create Issue </h1>

        <TextField.Root placeholder='Issue Title'   />
        <SimpleMdeReact placeholder='Issue Description' className='max-w-full'  />

        <Button type='submit'>Submit New Issue</Button>
           
    </div>
  )
}

export default page