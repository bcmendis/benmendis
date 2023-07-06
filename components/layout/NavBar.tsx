import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/layout/icons";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SiteLinks, SiteLinksMobile } from "./SiteLinks";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";
import { buttonVariants } from "../ui/button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "../auth/UserAccountNav";

const items: NavItem[] = siteConfig.siteLinks;

const NavBar = async () => {
  const session = await getAuthSession();
  console.log(session);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 justify-between items-center md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-accent-foreground" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <SiteLinks items={items} />
        <div>
          <nav className="hidden sm:flex items-center space-x-3">
            {/* <SocialLinks /> */}
            <ThemeToggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <Link href="/sign-in" className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </nav>
        </div>
        <SiteLinksMobile items={items} />
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default NavBar;
