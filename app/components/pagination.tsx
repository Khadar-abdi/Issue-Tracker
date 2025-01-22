import { Button, Flex, Text } from '@radix-ui/themes';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react'

interface props{
    itemCount: number;
    currentPage: number;
    pageSize: number;
}

const Pagination = ({itemCount, currentPage, pageSize  }: props) => {
    const pageCount = Math.ceil(itemCount/pageSize)
    if(pageCount <= 1) return null
    console.log(pageCount)
  return (
    <Flex gap='2' align='center' justify='center'>
        <Text size='2' className='text-slate-600 font-sans'> page {currentPage}  of {pageCount}</Text>
        <Button  variant='soft' disabled={currentPage === 1}>
        <ChevronsLeft />
        </Button>
        <Button  variant='soft' disabled={currentPage === 1}>
        <ChevronLeft />
        </Button>
        <Button  variant='soft' disabled={currentPage === pageCount}>
        <ChevronRight />
        </Button>
        <Button  variant='soft' disabled={currentPage === pageCount}>
        <ChevronsRight />
        </Button>
       

    </Flex>
  )
}

export default Pagination