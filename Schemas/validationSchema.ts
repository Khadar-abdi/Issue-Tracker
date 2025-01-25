import { z } from "zod";

 export  const IssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100),
    description: z.string().min(1, 'Description is required' ).max(65535),
});
 export  const PatchIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100).optional(),
    description: z.string().min(1, 'Description is required' ).max(65535).optional(),
    assignedToUserId: z.string().min(1, 'Assigned User is required').max(255).optional().nullable()
});


export const CommentSchema = z.object({
    content: z.string().min(1, 'Comment is required').max(65535),
    // issueId: z.number().min(1, 'Issue is required').max(255),
    // userId: z.string().min(1, 'User is required').max(255),
});