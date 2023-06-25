"use client"
import useScrollProgress from "@/hooks/useScrollProgress";

const ScrollIndicator = () => {
    const completion = useScrollProgress();
  return (
    <span
      style={{ transform: `translateX(${completion - 100}%)` }}
      className="absolute bg-accent-foreground h-[2px] w-full bottom-0"
    />
  );
};

export default ScrollIndicator;
