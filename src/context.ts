import {PrismaClient} from "@prisma/client"

export interface Context {
  prisma: PrismaClient
}

const prisma = new PrismaClient();

export function createContext(): Context{
  return { prisma }
}