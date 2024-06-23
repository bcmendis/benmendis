import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewSection from "@/components/reviews/ReviewSection";
import { getAuthSession } from "@/lib/auth";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();


  return (
    <div className="container flex flex-col items-center gap-y-10">
      <ReviewForm session={session} />
      <ReviewSection session={session} />
    </div>
  );
};

export default page;
