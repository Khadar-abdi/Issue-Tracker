import { type NextRequest, NextResponse} from 'next/server'
import { getServerSession } from 'next-auth';
import prisma from '@/prisma/client';
import { CommentSchema } from '@/Schemas/validationSchema';
import authOptions from '@/app/auth/authOptions';

export async function POST(request: NextRequest,  { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({}, { status: 401 });

    const body = await request.json();
    const validation = CommentSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(
            { error: validation.error.format() },
            { status: 400 }
        );
    }

    

    const newComment = await prisma.comment.create({
        data: {
            content: validation.data.content,
            issueId: parseInt(params.id),
            userId: session.user.id,
        },
    });

    return NextResponse.json(newComment, { status: 201 });
}