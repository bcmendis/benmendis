"use client";
import { ReviewPostItem } from "@/types/review";
import { FC } from "react";
import UserAvatar from "../auth/UserAvatar";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import type { Session } from "next-auth";

interface ReviewPostProps {
  review: ReviewPostItem;
  session: Session | null;
}

const ReviewPost: FC<ReviewPostProps> = ({ review, session }) => {
  const createdAt = new Date(review.createdAt);

  //remove h-full when grid-rows[masonry] is supported

  return (
    <div
      className={`flex flex-col items-center pt-2 bg-card border ${
        session?.user.id === review.authorId
          ? "border-accent"
          : "border-border"
      } rounded-lg h-full`}
    >
      <div className="flex items-center justify-center w-full h-full mb-2 text-center p-3 text-xl font-semibold">
        <div>
          <span className="text-accent-foreground text-3xl">&quot; </span>
          <span className="">{review.content}</span>
          <span className="text-accent-foreground text-3xl"> &quot;</span>
        </div>
      </div>
        <Separator
          className={
            session?.user.id === review.authorId
              ? "bg-accent"
              : "bg-border"
          }
        />
      <div className="flex w-full items-center justify-between gap-3 p-3 text-sm flex-wrap">
        <div className="flex items-center gap-3">
          <UserAvatar
            className="h-8 w-8"
            user={{
              name: review.author.name || null,
              image: review.author.image || null,
            }}
          />
          <div>
            <p className="text-accent-foreground">{review.author.name}</p>
            <p className="text-muted-foreground">{`${review.author.job} @ ${review.author.employer}`}</p>
          </div>
        </div>
        <time
          dateTime={createdAt.toDateString()}
          className="text-muted-foreground"
        >
          {format(createdAt, "MMMM d, yyyy")}
        </time>
      </div>
    </div>
  );
};

export default ReviewPost;
