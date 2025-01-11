import prisma from "@/prisma/client";
import { IssueSchema } from "@/Schemas/validationSchema";
import { NextRequest, NextResponse } from "next/server";

 

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
        return  NextResponse.json({issue: "invalid Issue"}, { status: 404})

    const UpdatedIssue = await prisma.issue.update({
        where:{  id: issue.id },
        data:{
            title: validation.data.title,
            description: validation.data.description
        }
    })

    return NextResponse.json(UpdatedIssue, {status: 201});

}