import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "../layout/icons";

import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

interface SpecialPageWrapperProps {
  children: React.ReactNode;
}

interface SpecialPageCardrProps {
  children: React.ReactNode;
  imageLight: string;
  imageDark: string;
  imgAltText: string;
  title: string;
  subtitle: string;
  credits?: string;
  creditsUrl?: string;
}

export const SpecialPageWrapper: FC<SpecialPageWrapperProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="container h-full sm:max-w-6xl mx-auto flex flex-col items-center justify-center gap-3">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -ml-5 sm:-ml-12"
          )}
        >
          <Icons.leftChevron className="h-6 w-6 mr-1" />
          Back to Home
        </Link>
        {children}
      </div>
    </div>
  );
};

export const SpecialPageCard: FC<SpecialPageCardrProps> = ({imageLight, imageDark, imgAltText, title, subtitle, credits, creditsUrl, children}) => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center items-center border rounded-lg p-0 bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center px-4 pb-6 pt-0 sm:p-0">
        <Image
          src={imageLight}
          alt={imgAltText}
          priority
          className="block dark:hidden"
        />
        <Image
          src={imageDark}
          alt={imgAltText}
          priority
          className="hidden dark:block"
        />
        <div className="flex flex-col space-y-4 text-center items-center px-6">
          <div className="flex space-x-2 items-end justify-center text-accent-foreground">
            <Icons.logo className="mx-auto h-8 w-8" />
            <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          </div>
          <p className="text-lg max-w-xs mx-auto text-muted-foreground">
            {subtitle}
          </p>
          <Separator />
          {children}
        </div>
      </div>
      {creditsUrl && <>
      <Separator />
      <Link
        href={creditsUrl}
        className={cn(
          buttonVariants({ variant: "link", className: "p-1 text-xs" }),
          "mt-0 text-muted-foreground"
        )}
      >
        {credits}
      </Link>
      </>}
    </div>
  );
};
