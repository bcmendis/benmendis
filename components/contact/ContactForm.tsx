"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactValidatator,
  CreateContactPayload,
} from "@/lib/validators/contact";
import type { User } from "@prisma/client";
import { Label } from "../ui/label";
import { Button, buttonVariants } from "../ui/button";
import TextareaAutosize from "react-textarea-autosize";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";

interface ContactFormProps extends React.HTMLAttributes<HTMLElement> {
  user?: User | null;
}

const ContactForm: FC<ContactFormProps> = ({ user, className }) => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  let contactFormDefaultValues = {
    name: "",
    email: "",
    phone: "",
    job: "",
    employer: "",
    message: "",
  };
  if (user) {
    contactFormDefaultValues = {
      name: `${user.name || ""}`,
      email: `${user.email || ""}`,
      phone: "",
      job: `${user.job || ""}`,
      employer: `${user.employer || ""}`,
      message: "",
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateContactPayload>({
    resolver: zodResolver(ContactValidatator),
    defaultValues: contactFormDefaultValues,
    mode: "all",
  });

  const onSubmit = async (payload: CreateContactPayload) => {
    try {
      console.log(payload);
      
      setisLoading(true);
      const {data} = await axios.post("/api/contact", {payload})
      console.log(data);
      // reset();
      toast({
        title: "Yay!",
        description: data,
        variant: "default",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          return toast({
            title: "Invalid contact input",
            description: "Please check your input again.",
            variant: "destructive",
          });
        }
      }
       toast({
         title: "Oops! Something went wrong",
         description: "Could not send message.",
         variant: "destructive",
       });
    } finally {setisLoading(false);}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex w-full flex-col p-2 gap-3", className)}
    >
      <div>
        <Label
          htmlFor="name"
          className={`${
            errors.name ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.name ? `${errors.name.message}` : "Name"}
        </Label>
        <Input
          {...register("name")}
          type="text"
          id="name"
          className={errors.name ? "border-red-500" : ""}
        />
      </div>
      <div>
        <Label
          htmlFor="email"
          className={`${
            errors.email ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.email ? `${errors.email.message}` : "Email"}
        </Label>
        <Input
          {...register("email")}
          type="text"
          id="email"
          className={errors.email ? "border-red-500" : ""}
        />
      </div>
      <div>
        <Label
          htmlFor="phone"
          className={`${
            errors.phone ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.phone ? `${errors.phone.message}` : "Phone"}
        </Label>
        <Input
          {...register("phone")}
          type="number"
          id="phone"
          className={errors.phone ? "border-red-500" : ""}
        />
      </div>
      <div>
        <Label
          htmlFor="job"
          className={`${
            errors.job ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.job ? `${errors.job.message}` : "Job"}
        </Label>
        <Input
          {...register("job")}
          type="text"
          id="job"
          className={errors.job ? "border-red-500" : ""}
        />
      </div>
      <div>
        <Label
          htmlFor="employer"
          className={`${
            errors.employer ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.employer ? `${errors.employer.message}` : "Employer"}
        </Label>
        <Input
          {...register("employer")}
          type="text"
          id="employer"
          className={errors.employer ? "border-red-500" : ""}
        />
      </div>
      <div>
        <Label
          htmlFor="message"
          className={`${
            errors.message ? "text-red-500" : "text-accent-foreground"
          } p-1`}
        >
          {errors.message ? `${errors.message.message}` : "Message"}
        </Label>
        <TextareaAutosize
          {...register("message")}
          id="message"
          placeholder="Hi, I would like to contact you regarding...."
          minRows={5}
          className={`${
            errors.message ? "border-red-500" : ""
          } w-full appearance-none overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        />
      </div>
      <Button
        type="submit"
        isLoading={isLoading}
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
