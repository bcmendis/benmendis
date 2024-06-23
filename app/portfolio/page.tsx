import { Separator } from "@/components/ui/separator";
import { webAppsType, hobbyProjects, workProjects } from "@/lib/portfolio";
import Image from "next/image";
import { Icons } from "@/components/layout/icons";
import { cn } from "@/lib/utils";

const PortfolioPage = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-start gap-y-8">
      <div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-muted-foreground">
            A list of <strong>Full-time</strong> projects I worked on to bring
            my employers vision to life.
          </p>
        </div>
        <Separator className="my-6" />
        <MapProjects projectList={workProjects} />
      </div>
      <div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            A list of <strong>hobby</strong> projects meant to showcase my
            software engineering skills & interests.
          </p>
        </div>
        <Separator className="my-6" />
        <MapProjects projectList={hobbyProjects} />
      </div>
    </section>
  );
};

export default PortfolioPage;

interface mapProjectsProps {
  projectList: webAppsType[];
}

const MapProjects = ({ projectList }: mapProjectsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {projectList.map((project, i) => {
        return (
          <div
            key={i}
            className="relative w-full group hover:scale-105 text-sm sm:text-base mb-2 transition-all ease-out"
          >
            {project.isFeatured && (
              <div className="absolute z-[2] -top-2 -right-2 bg-accent dark:bg-accent-foreground rounded-full w-8 h-8">
                <Icons.star className="h-full w-full text-background p-1" />
              </div>
            )}
            <a target="_blank" href={project.link}>
              <div className={cn(
                  "relative bg-background rounded-lg overflow-hidden",
                  project.isFeatured
                    ? "border-[3px] border-accent dark:border-accent-foreground"
                    : ""
                )}>
                <Image
                  src={project.image}
                  alt={project.title}
                  priority
                  className="w-full object-cover opacity-80 group-hover:opacity-100 group-ease-in"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 flex items-center justify-between w-full flex-wrap bg-black/100 dark:bg-black/70">
                  <span className="text-accent dark:text-accent-foreground font-bold">
                    {project.title}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted-foreground text-xs text-muted font-semibold">
                    {project.featuredTech}
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
  );
};
