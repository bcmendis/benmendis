"use client"
import { ReviewPostItem } from '@/types/review'
import { FC } from 'react'
import UserAvatar from '../auth/UserAvatar'
import { Separator } from '../ui/separator'
import { format } from 'date-fns'

interface ReviewPostProps {
  review: ReviewPostItem
}

const ReviewPost: FC<ReviewPostProps> = ({review}) => {
  const createdAt = new Date(review.createdAt);

  //remove h-full when grid-rows[masonry] is supported

  return (
    <div className="flex flex-col justify-between items-center p-2 border border-muted rounded-lg h-full">
      <div className="w-full mb-2 text-center p-3 text-xl">
        <span className="text-accent-foreground text-3xl">&quot; </span>
        {review.content}
        <span className="text-accent-foreground"> &quot;</span>
      </div>
      <Separator />
      <div className="flex w-full items-center justify-between gap-3 p-1 text-sm flex-wrap">
        <div className="flex items-center gap-3 p-1">
          <UserAvatar
            className="h-8 w-8"
            user={{
              name: review.author.name || null,
              image: review.author.image || null,
            }}
          />
          <div>
            <p className="text-accent-foreground">{review.author.name}</p>
            <p className="text-muted-foreground">{review.author.email}</p>
          </div>
        </div>
        <time
          dateTime={createdAt.toDateString()}
          className="text-muted-foreground"
        >
          {format(createdAt, 'MMMM d, yyyy')}
        </time>
      </div>
    </div>
  );
}

export default ReviewPost