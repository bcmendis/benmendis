import { webApps } from "@/lib/portfolio";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {webApps.map((project, i) => {
          return (
            <div
              key={i}
              className="w-full group hover:scale-105 text-sm sm:text-base mb-2 transition-all ease-out"
            >
              <a target="_blank" href={project.link}>
                <div className="relative bg-background rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    priority
                    className="w-full object-cover opacity-70 group-hover:opacity-100 group-ease-in"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-2 flex items-center justify-between w-full flex-wrap bg-white/70 dark:bg-black/70">
                    <span className="text-accent-foreground font-bold">
                      {project.title}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-muted-foreground text-xs text-muted font-semibold">
                      {project.featured}
                    </span>
                  </div>
                </div>
                <div className="p-2 mt-2 text-muted-foreground text-base sm:text-lg text-center sm:text-left">
                  {project.description}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioPage;
