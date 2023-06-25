import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SiteLinks, SiteLinksMobile } from "./SiteLinks";

const items : NavItem[] = siteConfig.siteLinks;

const NavBar = () => {

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 justify-between items-center gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-accent" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <SiteLinks items={items}/>
        <div>
          <nav className="flex items-center space-x-1">
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
                <Icons.linkedIn className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
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
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
        <SiteLinksMobile />
      </div>
    </header>
  );
};

export default NavBar;
