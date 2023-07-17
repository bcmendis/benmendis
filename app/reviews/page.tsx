import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewSection from "@/components/reviews/ReviewSection";
import { getAuthSession } from "@/lib/auth";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();

  return (
    <div className="flex flex-col items-center gap-y-3">
      <ReviewForm session={session} />
      <ReviewSection />
    </div>
  );
};

export default page;
