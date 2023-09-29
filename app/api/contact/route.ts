import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/prisma/db";
import { ContactValidatator } from "@/lib/validators/contact";
import type { User } from "@prisma/client";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    let user: User | null = null;

    if (session) {
      user = await db.user.findFirst({ where: { id: session.user.id } });
    }

    const body = await req.json();
    console.log("payload", body.payload);

    const { name, email, phone, job, employer, message } =
      ContactValidatator.parse(body.payload);

    if (user && (job || employer)) {
      if (user.job !== job) {
        console.log("job update");
        const updateJob = await db.user.update({
          where: { id: user?.id },
          data: {
            job,
          },
        });
      }
      if (user.employer !== employer) {
        console.log("employer update");
        const updateEmployer = await db.user.update({
          where: { id: user?.id },
          data: {
            employer,
          },
        });
      }
    }

    const createContact = await db.contact.create({
      data: {
        name,
        email,
        phone,
        job,
        employer,
        message,
        userId: user?.id,
      },
    });

    return new Response("Message successfully sent.", { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }
    return new Response("Could not send message", { status: 500 });
  }
}
