"use client"

import Link from "next/link";
import { buttonVariants} from "@/components/ui/button";
import { Links } from "@/config/site";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";


interface SocialStylesProps {
  classname?: string;
}

const SocialLinks = ({classname}: SocialStylesProps) => {
  return (
    <div className={classname}>
      {Links?.length
        ? Links.map((link, index) => {
          return (
            <TooltipProvider delayDuration={100} key={index}>
              <Tooltip>
                <TooltipTrigger onMouseDown={e=>e.preventDefault()} asChild>
                    <Link href={link.href} target="_blank" rel="noreferrer" className={cn(buttonVariants({variant:'icon'}), "px-2")}>
                      <link.icon className="h-8 w-8 md:h-5 md:w-5 fill-current" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent aria-label={link.title}>
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );})
        : null}
    </div>
  );
};

export default SocialLinks;
