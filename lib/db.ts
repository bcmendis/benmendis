import { PrismaClient } from "@prisma/client";
// import "server-only"

// declare global {
//   // eslint-disable-next-line no-var, no-unused-vars
//   var cachedPrisma: PrismaClient
// }

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// } 

// export const db = prisma;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;