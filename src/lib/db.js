import { PrismaClient } from '@/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis

if (!globalForPrisma.prisma) {
  // Prisma 7 requires the adapter to be passed into the constructor
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
  })
  
  globalForPrisma.prisma = new PrismaClient({ adapter })
}

export const prisma = globalForPrisma.prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma