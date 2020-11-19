import {PrismaClient} from "@prisma/client"

export interface Context {
  prisma: PrismaClient
  token: string
}

const prisma = new PrismaClient();

export function createContext({req}): Context{
  const token = req.headers.authorization;
  return { prisma, token }
}