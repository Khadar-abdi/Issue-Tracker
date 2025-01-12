import prisma from "@/prisma/client"
import IssueForm from "../../_components/IssueForm"
import { notFound } from "next/navigation"
import React from "react"

 

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