"use client";
import type { Session } from "next-auth";
import React from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateReviewPayload, ReviewValidatator } from "@/lib/validators/review";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";

import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";
import UserAvatar from "../auth/UserAvatar";
import { Button, buttonVariants } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { Input } from "../ui/input";
import { Icons } from "../layout/icons";

interface ReviewFormProps {
  session: Session | null;
}

const ReviewForm = ({ session }: ReviewFormProps) => {
  const router = useRouter();

  const {register, handleSubmit, formState: {errors}, reset} = useForm<CreateReviewPayload>({
    resolver: zodResolver(ReviewValidatator),
    defaultValues: {
      job: "",
      employer: "",
      review: "",
    },
    mode:"all",
  });
  
  const QueryClient = useQueryClient();

  const { mutate: createReview, isLoading } = useMutation({
    mutationFn: async (payload: CreateReviewPayload) => {
      const { data } = await axios.post("/api/reviews", payload);

      return data as string;
    },
    onError: error => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            title: "Review already exists",
            description: "Please update your review instead.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 422) {
          return toast({
            title: "Invalid review input",
            description: "Your review must be between 3 & 100 characters.",
            variant: "destructive",
          });
        }
        if (error.response?.status === 401) {
          return toast({
            title: "Sign in required",
            description: "You need to be signed in to do that.",
            variant: "destructive",
          });
        }
      }
      toast({
        title: "Oops! Something went wrong",
        description: "Could not post review.",
        variant: "destructive",
      });
    },
    onSuccess: data => {
      QueryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast({
        title: "Yay!",
        description: data,
        variant: "default",
      });
    },
  });

    const onSubmit = async (data: CreateReviewPayload) => {
      createReview(data);
      reset();
    };

  const Review = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full items-center gap-x-4 gap-y-4"
    >
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col md:items-end md:flex-row w-full gap-3">
          <div className="w-full">
            <p className="text-sm text-red-500 mb-1">{errors.job?.message}</p>
            <Input
              {...register("job")}
              type="text"
              id="job"
              placeholder="Job Title"
              className={errors.job ? "border-red-500" : ""}
            />
          </div>
          <div className="w-full">
            <p className="text-sm text-red-500 mb-1">
              {errors.employer?.message}
            </p>
            <Input
              {...register("employer")}
              type="text"
              id="employer"
              placeholder="Employer"
              className={errors.employer ? "border-red-500" : ""}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm text-red-500 mb-1">{errors.review?.message}</p>
          <TextareaAutosize
            {...register("review")}
            id="review"
            placeholder={`What do you think, ${
              session?.user.name?.split(" ")[0]
            }?`}
            className={`${
              errors.review ? "border-red-500" : ""
            } w-full h-10 resize-none appearance-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          />
        </div>
      </div>
      <div className="flex w-full gap-3">
        <UserAvatar
          className="h-8 w-8 sm:h-10 sm:w-10"
          user={{
            name: session?.user.name || null,
            image: session?.user.image || null,
          }}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={Object.keys(errors).length > 0 ? true : false}
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "w-full"
          )}
        >
          Post
        </Button>
      </div>
    </form>
  );

  const SignInReview = (
    <div
      className="flex flex-col sm:flex-row w-full h-full items-center gap-x-4 gap-y-4"
      onClick={() => router.push("/sign-in?callbackUrl=/reviews")}
    >
      <div className="flex flex-1 w-full gap-x-4 items-center">
        <Avatar className="flex h-8 w-8 sm:h-10 sm:w-10 border items-center justify-center text-accent-foreground">
          <Icons.user className="w-full h-full p-1 sm:p-2" />
        </Avatar>
        <span className="flex flex-1 border border-input rounded-md p-2 text-muted-foreground">
          Sign in to leave a review.
        </span>
      </div>
      <Button
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "w-full sm:w-fit"
        )}
      >
        Sign in
      </Button>
    </div>
  );

  return (
    <Card className="flex max-w-4xl w-full p-2 items-center">
      <CardContent className="flex w-full h-full items-center p-2 sm:p-4 text-s sm:text-base">
        {!session ? SignInReview : Review}
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
