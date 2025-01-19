'use client'
import React, { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider as QueryClientProviderProps  } from '@tanstack/react-query'

const queryClient = new QueryClient();

const QueryClientProvider = ({children}: PropsWithChildren) => {
  return (
   <QueryClientProviderProps client={queryClient}>
    {children}
   </QueryClientProviderProps>
  )
}

export default QueryClientProvider