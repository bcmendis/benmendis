import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewSection from "@/components/reviews/ReviewSection";
import { getAuthSession } from "@/lib/auth";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();


  return (
    <div className="flex flex-col items-center gap-y-10">
      <ReviewForm session={session} />
      <ReviewSection session={session} />
    </div>
  );
};

export default page;
