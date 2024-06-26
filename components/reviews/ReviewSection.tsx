"use client";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FC, useEffect, useState } from "react";
import ReviewPost from "./ReviewPost";
import { ReviewPostItem } from "@/types/review";
import { BeatLoader } from "react-spinners/";
import type { Session } from "next-auth";
import Link from "next/link";
import { useTheme } from "next-themes";

interface ReviewSectionProps {
  session: Session | null;
}

const ReviewSection: FC<ReviewSectionProps> = ({ session }) => {
  const [color, setColor] = useState("");

  const { resolvedTheme: theme } = useTheme();

  useEffect(() => {
    if (theme === "dark" && !undefined) {
      setColor("hsl(270, 60%, 40%)");
    } else if (theme === "light" && !undefined) {
      setColor("hsl(210, 70%, 55%)");
    } else return
  }, [theme]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("/api/reviews");

      data.sort((a: ReviewPostItem) => {
        if (a.author.email === "benclintonmendis@gmail.com") {
          return -1;
        } else return 1;
      });

      return data as ReviewPostItem[];
    },
  });

  if (error instanceof AxiosError) {
    if (error.response?.status === 500)
      toast({
        title: "Oops! Something went wrong",
        description: `Could not fetch reviews`,
        variant: "destructive",
      });
  }

  return (
    <>
      <h2 className="text-muted-foreground">Review Wall</h2>
      <div className="mx-auto grid sm:grid-rows-[masonry] max-w-md grid-flow-dense grid-cols-1 gap-8 text-sm leading-6  sm:max-w-2xl sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
        {data &&
          !isLoading &&
          !isError &&
          data.map((review: ReviewPostItem, index: number) => (
            <div
              key={review.id}
              className="odd:sm:col-span-2 first:xl:col-start-2"
            >
              {/* <Link href={`/reviews/${review.id}`}> */}
                <ReviewPost isOdd={index%2!==0} review={review} session={session} />
              {/* </Link> */}
            </div>
          ))}
      </div>
      <BeatLoader
        color={color}
        loading={isLoading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default ReviewSection;
