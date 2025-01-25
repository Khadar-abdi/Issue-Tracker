import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/client";
import { DefaultSession, NextAuthOptions, Session } from "next-auth";


declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

const authOptions: NextAuthOptions ={
        adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ],
      callbacks: {
        jwt({ token, account, user }) {
          if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
          }
          return token
        },
        session({ session, token, user }) {
          session.user.id  = token.id as string
          return session 
          // The return type will match the one returned in `useSession()`
        },
      },
      session: {
        strategy: 'jwt'
      }
  
}
export default authOptions