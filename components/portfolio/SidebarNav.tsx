"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";
import { useEffect, useRef } from "react";

interface SidbarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

const SidebarNav = ({ className, items, ...props }: SidbarNavProps) => {
  const path = usePathname();
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const index = items.findIndex(item => item.href === path);
    if (index !== -1 && refs.current[index]) {
      refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }, [path, items]);

  return (
    <nav
      className={cn(
        "px-8 sm:px-0 w-fit sm:w-full flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          ref={(el) => (refs.current[index] = el)}
          className={cn(
            "justify-start w-[calc(100vw/2)] sm:w-full",
            buttonVariants({ variant: "ghost" }),
            path === item.href
              ? " bg-accent text-secondary-foreground"
              : "hover:bg-transparent hover:text-accent text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
