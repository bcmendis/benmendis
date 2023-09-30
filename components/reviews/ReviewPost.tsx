"use client";
import { FC } from "react";
import type { Session } from "next-auth";
import { ReviewPostItem } from "@/types/review";
import UserAvatar from "../auth/UserAvatar";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ReviewPostProps {
  review: ReviewPostItem;
  session: Session | null;
  isOdd: boolean;
}

const ReviewPost: FC<ReviewPostProps> = ({ isOdd, review, session }) => {
  const createdAt = new Date(review.createdAt);
  console.log(isOdd, review.author.name);
  
  //remove h-full when grid-rows[masonry] is supported

  return (
    <div
      className={`flex flex-col items-center pt-2 bg-custom border rounded-lg h-full overflow-hidden ${
        session?.user.id === review.authorId ? "border-accent" : "border-border"
      }`}
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
          session?.user.id === review.authorId ? "bg-accent" : "bg-border"
        }
      />
      <div
        className={cn(
          "flex w-full justify-between gap-3 p-3 text-sm flex-wrap bg-card",
          {
            "flex-col items-start": isOdd,
            "items-center": !isOdd,
          }
        )}
      >
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
          className={cn("text-muted-foreground text-right", {
            "ml-3": isOdd,
          })}
        >
          {format(createdAt, "MMMM d, yyyy")}
        </time>
      </div>
    </div>
  );
};

export default ReviewPost;
