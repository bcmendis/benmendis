"use client"

import Link from "next/link";
import { Button} from "@/components/ui/button";
import { Links } from "@/config/site";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


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
                  <Button variant="icon" asChild>
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      <link.icon className="h-8 w-8 sm:h-5 sm:w-5 fill-current" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </Button>
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
