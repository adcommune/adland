import { PrismaClient, Prisma } from '@adland/db'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export { Prisma }

export default prisma
