import { FC } from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Card, CardContent } from '../ui/card';
import { buttonVariants } from '../ui/button';

interface ReviewProps {
  
}

const Review: FC<ReviewProps> = ({}) => {
  return (
    <Card className="flex items-center py-4">
      <CardContent className="flex flex-col sm:flex-row w-full h-full justify-evenly items-center gap-4 p-0 px-4 sm:p-4 sm:px-0">
        <p className=" text-accent-foreground font-semibold text-lg sm:text-2xl">
          Like what you see?
        </p>
        <div className="flex w-full sm:w-[30%]">
          <Link
            href="/reviews"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "w-full"
            )}
          >
            Leave a Review
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Review