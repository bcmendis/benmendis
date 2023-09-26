import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/prisma/db';
import { FC } from 'react'
import { notFound } from 'next/navigation';

interface ReviewPageProps {
  params: {id: string}
}

const ReviewPage: FC<ReviewPageProps> = async ({params}) => {
  const session = await getAuthSession();
    const review = await db.review.findFirst({
      where: {id: params.id},
       include: {
         author: {
           select: {
             name: true,
             email: true,
             image: true,
             role: true,
             job: true,
             employer: true,
           },
         },
       },
     });
     if (!review) {
      notFound();
     } else return <div>Review id: {params.id}</div>;
};

export default ReviewPage;