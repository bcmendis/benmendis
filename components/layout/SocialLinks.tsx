import Link from "next/link";
import { Icons } from "@/components/layout/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface SocialStylesProps {
  classname?: string;
}

const SocialLinks = ({classname}: SocialStylesProps) => {
  
  return (
    <div className={classname}>
      <Link
        href={siteConfig.socialLinks.linkedIn}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.linkedIn className="h-8 w-8 sm:h-5 sm:w-5 fill-current" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>
      <Link
        href={siteConfig.socialLinks.gitHub}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.gitHub className="h-8 w-8 sm:h-5 sm:w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
    </div>
  );
};

export default SocialLinks;
