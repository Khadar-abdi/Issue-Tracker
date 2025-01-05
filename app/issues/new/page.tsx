import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-2/5 flex-col space-y-5' >
        {/* creating Issues */}
        <h1 className=' text-slate-400 text-xl font-sans font-semibold' > Create Issue </h1>

        <TextField.Root placeholder='Issue Title' className='w-full' />
        <TextArea placeholder=' Your Description' />

        <Button type='submit'>Submit New Issue</Button>
           
    </div>
  )
}

export default page