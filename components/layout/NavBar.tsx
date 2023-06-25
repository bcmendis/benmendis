import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/layout/icons";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SiteLinks, SiteLinksMobile } from "./SiteLinks";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";

const items : NavItem[] = siteConfig.siteLinks;

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 justify-between items-center md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-accent-foreground" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <SiteLinks items={items} />
        <div>
          <nav className="hidden sm:flex items-center space-x-1">
            <SocialLinks />
            <ThemeToggle />
          </nav>
        </div>
        <SiteLinksMobile items={items} />
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default NavBar;
