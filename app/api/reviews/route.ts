import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/prisma/db";
import { ReviewValidatator } from "@/lib/validators/review";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  try{
    const reviews = await db.review.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
            image: true,
            role: true,
          }

        }
      }
    });
    console.log(reviews)
    if(!reviews) {
      return new Response('There are no reviews yet.', { status: 204})
    }
    return NextResponse.json(reviews, { status: 200});
  }
  catch(error){
    return new Response("Could not fetch reviews.", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if(!session?.user) {
      return new Response('Unauthorized.', {status: 401});
    }

    const reviewExists = await db.review.findFirst({
      where: {
        authorId : session.user.id
      }
    }
    )
    
    if(reviewExists) {
      return new Response('You have already left a review.', {status: 409});
    }

    const body = await req.json();
    const { review } = ReviewValidatator.parse(body);

    const createReview = await db.review.create({
      data: {
        content: review,
        authorId: session.user.id
      }
    })

    return new Response('Review successfully posted.', {status: 201})
  }
  catch (error) {
    if(error instanceof z.ZodError) {
      return new Response(error.message, {status:422});
    }

    return new Response('Could not post review.', {status: 500})
  }
}