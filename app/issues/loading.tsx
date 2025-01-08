import { Button, Link, Table } from '@radix-ui/themes'
import delay from 'delay';
import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingIssuesPage =   () => {
    const Issues = [1, 2, 3, 4, 5,6,7,8,9]
 
    return (

        <div > 
      <div className='my-5'>

      <Button className='text-slate-100'> <Link href={'/issues/new'}  >  New Issue </Link></Button> 
      </div>
       
            <Table.Root variant='surface' >
                <Table.Header>
                    <Table.Row>
                        <Table.Cell className='text-slate-600 font-medium'>Issue</Table.Cell>
                        <Table.Cell className='  font-medium text-slate-600'>Status</Table.Cell>
                        <Table.Cell className='hidden md:table-cell font-medium text-slate-600' >Created</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body >
                    {Issues.map((issue) => (

                        <Table.Row key={issue}>
                            <Table.Cell className='text-slate-600'>

                                <Skeleton />

                            </Table.Cell>
                            <Table.Cell className='  text-slate-600'>
                                <Skeleton />
                            </Table.Cell>
                            <Table.Cell className='hidden md:table-cell text-slate-600'>  <Skeleton /></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table.Root>
            </div > 
    )
}

export default LoadingIssuesPage