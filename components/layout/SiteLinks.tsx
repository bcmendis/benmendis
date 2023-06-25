"use client"

import Link from "next/link";

import { Icons } from "@/components/layout/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialLinks from "./SocialLinks";
import { Separator } from "../ui/separator";


interface NavItemProps {
  items?: NavItem[];
}

export const SiteLinks = ({items} : NavItemProps) => {

  const path = usePathname();

  return (
    <div className="hidden sm:block flex-1 items-center">
      {items?.length ? (
        <nav className="flex items-center justify-center gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    `flex items-center text-sm font-medium ${
                      path === item.href
                        ? "text-accent-foreground hover:text-muted-foreground"
                        : "text-muted-foreground hover:text-primary"
                    }`,
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
};


export const SiteLinksMobile = ({items} : NavItemProps) => {

    const path = usePathname();

  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <Icons.mobileMenuOpen />
        </SheetTrigger>
        <SheetContent className="flex h-full justify-between">
          <div className="flex-col flex-1 justify-between">
            {items?.length ? (
              <nav className="w-full gap-2">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          `flex h-12 justify-end items-center text-2xl font-medium ${
                            path === item.href
                              ? "text-accent-foreground hover:text-muted-foreground"
                              : "text-muted-foreground hover:text-primary"
                          }`,
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </nav>
            ) : null}
          </div>
          <SocialLinks classname="flex w-full justify-between text-muted-foreground" />
        </SheetContent>
      </Sheet>
    </div>
  );
};



