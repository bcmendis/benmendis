"use client"

import { Icons } from "@/components/layout/icons";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTopButton = () => {
  return (
    <button className="hidden sm:block absolute bottom-0 -right-16 p-5 text-muted-foreground/50 hover:text-accent-foreground z-10" onClick={scrollToTop}>
      <Icons.upArrow className="h-10 w-10"/>
    </button>
  );
};

export default ScrollToTopButton;
