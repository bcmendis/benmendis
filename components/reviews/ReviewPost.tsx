"use client"
import { ReviewPostItem } from '@/types/review'
import { FC } from 'react'
import UserAvatar from '../auth/UserAvatar'
import { Separator } from '../ui/separator'

interface ReviewPostProps {
  review: ReviewPostItem
}

const ReviewPost: FC<ReviewPostProps> = ({review}) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 border border-muted rounded-lg">
      <div className="flex items-center gap-3 p-1">
        <UserAvatar
          className="h-8 w-8 sm:h-10 sm:w-10"
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
      <Separator />
      <div className="w-full mt-2 text-left">
        <span className="text-accent-foreground text-3xl">&quot; </span>
        {review.content}
        <span className="text-accent-foreground text-3xl"> &quot;</span>
      </div>
    </div>
  );
}

export default ReviewPost