import { db } from "@/lib/prisma/db";

export async function GET(req: Request, res: Response) {
  try {
    const testData = await db.contact.findMany({
      where: {
        name: "cron",
      },
    });

    if (testData.length !== 0) {
      const deleteTestData = await db.contact.deleteMany({
        where: {
          name: "cron",
        },
      });

      return new Response(JSON.stringify(deleteTestData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const createContact = await db.contact.create({
        data: {
          name: "cron",
          email: "cron@cronjob.com",
          phone: null,
          job: null,
          employer: null,
          message: "This is a cron job!",
          userId: null,
        },
      });

      return new Response(JSON.stringify(createContact), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
