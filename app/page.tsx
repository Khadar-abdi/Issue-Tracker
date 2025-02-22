import { Container, Flex, Grid } from '@radix-ui/themes'
import LeatestIssue from './LeatestIssue'
import IssuesSummary from './IssuesSummary'
import prisma from '@/prisma/client'
import IssueChart from './issueChart'
import { Metadata } from 'next'

async function Home( ) {
   

     
  const Open = await prisma.issue.count({
    where:{
      status: 'OPEN'
    }
  })
  const InProgress = await prisma.issue.count({
    where:{
      status: 'IN_PROGRESS'
    }
  })
  const Done = await prisma.issue.count({
    where:{
      status: 'DONE'
    }
  })
 
  return (
    <Container>
    <Grid className='w-full ' gap='3' columns={{ initial:'1', md:'2', lg:'2'}} >
      <Flex direction='column'  gap='2'  >
        <IssuesSummary open={Open} inProgress={InProgress} done={Done}  />
        <IssueChart open={Open} inProgress={InProgress} done={Done} />

      </Flex>
      <Flex direction='column'   className='w-full' align='center'>



      <LeatestIssue />
      </Flex>

    </Grid>
    </Container>
  )

  }
 

export const  metadata: Metadata ={
  title: 'Issue-Tracker - Dashboard',
  description: 'Summary of the Issue project',
}

export default Home

