import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/prisma/db";
import { ReviewValidatator } from "@/lib/validators/review";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if(!session?.user) {
      return new Response('Unauthorized', {status: 401});
    }

    const reviewExists = await db.review.findFirst({
      where: {
        authorId : session.user.id
      }
    }
    )
    
    if(reviewExists) {
      return new Response('You have already left a review', {status: 409});
    }

    const body = await req.json();
    const { review } = ReviewValidatator.parse(body);

    const createReview = await db.review.create({
      data: {
        content: review,
        authorId: session.user.id
      }
    })

    return new Response('Review successfully posted', {status: 200})
  }
  catch (error) {
    if(error instanceof z.ZodError) {
      return new Response(error.message, {status:422});
    }

    return new Response('Could not post review', {status: 500})
  }
}