import prisma from "@/prisma/client";
import { IssueSchema } from "@/Schemas/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import { error } from "node:console";

 

export async function PATCH( request: NextRequest,{params}: {params: { id: string}}){
    const body = await request.json();
    const validation =  IssueSchema.safeParse(body);

    if(!validation.success){
        return NextResponse.json({error: validation.error.format()}, {status: 400});
    }

   const issue= await prisma.issue.findUnique({
        where:{  id: parseInt(params.id) },
       
    })

    if(!issue) 
        return  NextResponse.json({error: "invalid Issue"}, { status: 404})

    const UpdatedIssue = await prisma.issue.update({
        where:{  id: parseInt(params.id) },
        data:{
            title: issue.title,
            description: issue.description
        }
    })

    return NextResponse.json(UpdatedIssue, {status: 201});

}

export async function DELETE( request: NextRequest,{params}: {params: { id: string}}){

     const issue= await prisma.issue.findUnique({
        where:{  id: parseInt(params.id) },
       
    })

    if(!issue){
        return  NextResponse.json({error: "invalid Issue"}, { status: 404})
    }
      await prisma.issue.delete({
        where:{  id: parseInt(params.id) },
       
    })

   

    return NextResponse.json('deleted issue', {status: 201});


}