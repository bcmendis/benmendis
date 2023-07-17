"use client";
import { toast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FC } from "react";
import ReviewPost from "./ReviewPost";
import { ReviewPostItem } from "@/types/review";

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

  return <div>{data ? data.map((review : ReviewPostItem)=> <ReviewPost key={review.id} review={review}/>) : "There are no reviews yet"}</div>;
};

export default ReviewSection;
