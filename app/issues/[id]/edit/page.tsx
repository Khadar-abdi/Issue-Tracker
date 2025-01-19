import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import React from "react"
import dynamic from "next/dynamic"
import IssueFormSkeleton from "@/app/components/skeleton"

const IssueForm = dynamic(()=> import("@/app/issues/_components/IssueForm"),
{
  ssr: false,
  loading: ()=> <IssueFormSkeleton />
})
 

interface props{
  params: { id: string}
}
const EditIssuePage = async ({params}: props) => {

  const issue= await prisma.issue.findUnique({
      where:{
        id: parseInt(params.id)
      }
  })

  if(!issue) return notFound();
  return (
    <IssueForm  issue={issue}  />
     
  )
}

export default EditIssuePage