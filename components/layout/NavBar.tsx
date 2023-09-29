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

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-fixed bg-cover bg-no-repeat bg-blob-scene-pattern-light dark:bg-blob-scene-pattern-dark">
      <div className="container flex h-16 justify-between items-center md:gap-5">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-accent-foreground" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <SiteLinks items={items} session={session} />
        <nav className="hidden md:flex items-center gap-x-3">
          <SocialLinks />
          <ThemeToggle />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "secondary" })}
            >
              Sign In
            </Link>
          )}
        </nav>
        <SiteLinksMobile items={items} session={session} />
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default NavBar;
