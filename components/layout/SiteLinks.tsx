"use client"

import Link from "next/link";

import { Icons } from "@/components/layout/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialLinks from "./SocialLinks";
import { ThemeToggleMobile } from "./theme-toggle";
import { Separator } from "../ui/separator";
import { Button, buttonVariants } from "../ui/button";
import type { Session } from "next-auth";
import UserAvatar from "../auth/UserAvatar";
import { signOut } from "next-auth/react";



interface NavItemProps {
  items?: NavItem[];
  session?: Session | null;
}

export const SiteLinks = ({items, session} : NavItemProps) => {
  
  const path = usePathname();
  console.log(session?.user.role);

  return (
    <div className="hidden sm:block flex-1 items-center">
      {items?.length ? (
        <nav className="flex items-center justify-center gap-5">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    `flex items-center text-sm font-medium ${
                      path === item.href
                        ? "text-accent-foreground"
                        : "text-muted-foreground hover:text-primary"
                    } ${item.href === '/admin' && session?.user.role !== 'ADMIN' ? "hidden" : ""}`,
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


export const SiteLinksMobile = ({items, session} : NavItemProps) => {

    const path = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <Icons.mobileMenuOpen className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent side="mobile" className="flex h-full">
          <div className="container flex justify-end">
            <SheetClose asChild>
              <Icons.mobileMenuClose className="h-8 w-8 text-muted-foreground" />
            </SheetClose>
          </div>
          <div className="flex flex-1 justify-end px-6 mb-10">
            {items?.length ? (
              <nav className="flex flex-col justify-end gap-2">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <SheetClose asChild key={index}>
                        <Link
                          href={item.href}
                          className={cn(
                            `flex h-12 justify-end items-center text-2xl font-medium ${
                              path === item.href
                                ? "text-accent-foreground hover:text-muted-foreground"
                                : "text-muted-foreground hover:text-primary"
                            } ${
                              item.href === "/admin" &&
                              session?.user.role !== "ADMIN"
                                ? "hidden"
                                : ""
                            }`,
                            item.disabled && "cursor-not-allowed opacity-80"
                          )}
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    )
                )}
              </nav>
            ) : null}
          </div>
          <SocialLinks classname="flex max-h-10 mb-1 justify-end items-center text-muted-foreground overflow-hidden" />
          <Separator className="text-muted-foreground" />
          <ThemeToggleMobile />
          <Separator className="text-muted-foreground" />
          {session?.user ? (
            <div className="flex justify-between items-center w-full px-3 gap-x-3">
              <SheetClose asChild className="w-full">
                <Button
                  className={buttonVariants({ variant: "secondary" })}
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  Sign out
                </Button>
              </SheetClose>
              <UserAvatar
                className="h-8 w-8"
                user={{
                  name: session.user.name || null,
                  image: session.user.image || null,
                }}
              />
            </div>
          ) : (
            <div className="px-5">
              <SheetClose asChild>
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full"
                  )}
                >
                  Sign In
                </Link>
              </SheetClose>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};



