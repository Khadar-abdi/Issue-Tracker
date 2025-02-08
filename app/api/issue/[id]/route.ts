import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { PatchIssueSchema } from "@/Schemas/validationSchema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";



export async function PATCH( request: NextRequest,{params}:  {params: Promise<{ id: string }> }){
    const session = await getServerSession(authOptions);
    if(!session) return NextResponse.json({},{ status: 401})
        
        const { id } = await params;
        const body = await request.json();
        const validation =  PatchIssueSchema.safeParse(body);
        
        if(!validation.success){
            return NextResponse.json({error: validation.error.format()}, {status: 400});
        }
        const { assignedToUserId, description, title }= body
        
        
        
        
        if(assignedToUserId){
            const user = await prisma.user.findUnique({
                where:{
                    id: assignedToUserId
                }
            }) 
            if(!user)
                return  NextResponse.json({error: "invalid user"}, { status: 404})
        }
        
        
        const issue= await prisma.issue.findUnique({
            where:{  id: parseInt(id) },
            
        })
        
        if(!issue) 
            return  NextResponse.json({error: "invalid Issue"}, { status: 404})
        
    const UpdatedIssue = await prisma.issue.update({
        where:{  id: parseInt(id) },
        data:{
            title,
            description,
            assignedToUserId
        }
    })
    
    return NextResponse.json(UpdatedIssue, {status: 201});
    
}

 
export async function DELETE( request: NextRequest,{params}: {params: Promise<{ id: string }> }){
    const session = await getServerSession(authOptions);        
    if(!session) return NextResponse.json({},{ status: 401})

        const {id} = await params// ✅ Await the Promise before using it
 
    

     const issue= await prisma.issue.findUnique({
        where:{  id: parseInt(id) }, 
    })
    if(!issue){
        return  NextResponse.json({error: "invalid Issue"}, { status: 404})
    }
      await prisma.issue.delete({
        where:{  id: parseInt(id) }, 
    })
    return NextResponse.json('deleted issue', {status: 201});
}