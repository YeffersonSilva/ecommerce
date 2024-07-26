import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { prismaClient } from "@/lib/pisma"
import { authOptions } from "@/lib/auth"


export default NextAuth(authOptions)