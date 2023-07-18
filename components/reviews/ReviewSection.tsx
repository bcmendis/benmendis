"use client";
import { CSSProperties } from "react";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FC } from "react";
import ReviewPost from "./ReviewPost";
import { ReviewPostItem } from "@/types/review";
import { BeatLoader } from "react-spinners/";

interface ReviewSectionProps {}

const ReviewSection: FC<ReviewSectionProps> = ({}) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("/api/reviews");

      return data;
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
    <div>
      <div className="mx-auto mt-16 grid sm:grid-rows-[masonry] max-w-md grid-flow-dense grid-cols-1 gap-8 text-sm leading-6 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
        {data &&
          !isLoading &&
          !isError &&
          data.map((review: ReviewPostItem) => (
            <div
              key={review.id}
              className="odd:sm:col-span-2 first:xl:col-start-2"
            >
              <ReviewPost review={review} />
            </div>
          ))}
      </div>
      <BeatLoader
        color="hsla(270, 100%, 70%, 1)"
        loading={isLoading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default ReviewSection;
