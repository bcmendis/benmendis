import { Metadata } from "next";

import SidebarNav from "@/components/portfolio/SidebarNav";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A collection of my projects",
};

const sidebarNavItems = [
  {
    title: "Web Apps",
    href: "/portfolio",
  },
  {
    title: "Games",
    href: "/portfolio/games",
  },
  {
    title: "Stable Diffusion",
    href: "/portfolio/sd",
  },
];

interface PorfolioLayoutProps {
  children: React.ReactNode;
}

const PorfolioLayout = ({ children }: PorfolioLayoutProps) => {
  return (
    <>
      <div className="space-y-6 sm:p-10 pb-16 block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">My Portfolio</h2>
          <p className="text-muted-foreground">
            A collection of my projects, classified for your convenience.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-24 lg:space-y-0">
          <aside className="sm:self-start sticky mx-0 lg:-mx-4 w-full lg:w-1/5 pt-4 pb-2 sm:py-6 top-16 sm:top-16 lg:top-20 bg-background z-10">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex flex-1 w-full lg:max-w-4xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PorfolioLayout;
