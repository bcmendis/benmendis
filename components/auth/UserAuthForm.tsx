"use client";
import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Icons } from "../layout/icons";
import { cn } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className,
  ...props
}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl});
    } catch (error) {
      //toast notification
      toast({
        title: "Oops!",
        description: "There was an error logging in with Google",
        variant: "destructive",
      }); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn("flex justify-center items-center w-full", className)}
      {...props}
    >
      <Button
        size="sm"
        onClick={loginWithGoogle}
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
