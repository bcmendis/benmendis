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
                        ? "text-accent hover:text-muted-foreground"
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


export const SiteLinksMobile = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger><Icons.mobileMenuOpen/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};



