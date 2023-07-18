"use client"
import 
type { Session } from "next-auth";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import UserAvatar from "../auth/UserAvatar";
import { Button, buttonVariants } from "../ui/button";
import { useRouter } from "next/navigation";
import { Icons } from "../layout/icons";
import { Avatar } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, {AxiosError} from "axios";
import { CreateReviewPayload } from "@/lib/validators/review";
import { toast } from "@/hooks/use-toast";

interface ReviewFormProps {
  session: Session | null
}


const ReviewForm = ({session}:ReviewFormProps) => {
  
  const [review, setReview] = useState<string>("");
  const router = useRouter();

  const QueryClient = useQueryClient();
  const {mutate : createReview, isLoading} = useMutation({
    mutationFn: async() => {
      const payload: CreateReviewPayload = {
        review
      }
      const {data} = await axios.post('/api/reviews', payload);
      console.log(data);
      
      return data as string;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            title: 'Review already exists',
            description: 'Please update your review instead.',
            variant: "destructive"
          })
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
    onSuccess: (data) => {
      setReview("");
      QueryClient.invalidateQueries({queryKey: ['reviews']});
      toast({
        title: "Yay!",
        description: data,
        variant: "default",
      });
    }
  });

  
  const Review = (
    <form className="flex flex-col sm:flex-row w-full h-full items-center gap-x-4 gap-y-4">
      <div className="flex flex-1 w-full gap-x-4 items-center">
        <UserAvatar
          className="h-8 w-8 sm:h-10 sm:w-10"
          user={{
            name: session?.user.name || null,
            image: session?.user.image || null,
          }}
        />
        <Input
          type="text"
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder={`What do you think, ${
            session?.user.name?.split(" ")[0]
          }?`}
        />
      </div>
      <Button
        type="submit"
        isLoading={isLoading}
        disabled={review.length === 0}
        onClick={(e) => {
          e.preventDefault();
          createReview()}}
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "w-full sm:w-fit"
        )}
      >
        Post
      </Button>
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
          { !session ? SignInReview : Review }
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
