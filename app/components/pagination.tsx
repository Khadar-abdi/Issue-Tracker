'use client'
import { Button, Flex, Text } from '@radix-ui/themes';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface props{
    itemCount: number;
    currentPage: number;
    pageSize: number;
}

const Pagination = ({itemCount, currentPage, pageSize  }: props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount/pageSize)
    if(pageCount <= 1) return null

    const ChangePage =(page: number)=>{
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        const query = params.toString() ? `?${params.toString()}` : ''
        router.push(`/${query}`)
    }

  return (
    <Flex gap='2' align='center' justify='center'>
        <Text size='2' className='text-slate-600 font-sans'> page {currentPage}  of {pageCount}</Text>
        <Button  variant='soft' disabled={currentPage === 1} onClick={()=>ChangePage(1)}>
        <ChevronsLeft />
        </Button>
        <Button  variant='soft' disabled={currentPage === 1} onClick={()=>ChangePage(currentPage - 1)}>
        <ChevronLeft />
        </Button>
        <Button  variant='soft' disabled={currentPage === pageCount} onClick={()=>ChangePage(currentPage + 1)}>
        <ChevronRight />
        </Button>
        <Button  variant='soft' disabled={currentPage === pageCount}  onClick={()=>ChangePage(pageCount)}>
        <ChevronsRight />
        </Button>
       

    </Flex>
  )
}

export default Pagination