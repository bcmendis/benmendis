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
            A collection of my projects, classified for your convinience.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default PorfolioLayout;
