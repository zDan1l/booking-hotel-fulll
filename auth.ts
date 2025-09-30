import NextAuth from "next-auth"
import { prisma } from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google" 


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma), 
  providers: [Google],
  session : { strategy: "jwt",},
  pages : {
    signIn : "/signin"
  }

})