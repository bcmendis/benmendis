import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
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
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.href} target="_blank" rel="noreferrer">
                    <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "icon",
                      })}
                    >
                      <link.icon className="h-8 w-8 sm:h-5 sm:w-5 fill-current" />
                      <span className="sr-only">{link.title}</span>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );})
        : null}
    </div>
  );
  
  // return (
  //   <div className={classname}>
  //     <TooltipProvider>
  //       <Tooltip>
  //         <TooltipTrigger asChild>
  //           <Link
  //             href={siteConfig.socialLinks.linkedIn}
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             <div
  //               className={buttonVariants({
  //                 size: "sm",
  //                 variant: "icon",
  //               })}
  //             >
  //               <Icons.linkedIn className="h-8 w-8 sm:h-5 sm:w-5 fill-current" />
  //               <span className="sr-only">LinkedIn</span>
  //             </div>
  //           </Link>
  //         </TooltipTrigger>
  //         <TooltipContent>
  //           <p>LinkedIn</p>
  //         </TooltipContent>
  //       </Tooltip>
  //   </TooltipProvider>
  //     <Link
  //       href={siteConfig.socialLinks.gitHub}
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       <div
  //         className={buttonVariants({
  //           size: "sm",
  //           variant: "icon",
  //         })}
  //       >
  //         <Icons.gitHub className="h-8 w-8 sm:h-5 sm:w-5" />
  //         <span className="sr-only">GitHub</span>
  //       </div>
  //     </Link>
  //   </div>
  // );
};

export default SocialLinks;
