import { ReactElement } from "react";
import { Icons } from "@/components/layout/icons";

import { type Icon as LucideIcon } from "lucide-react";

interface techType {
  name: string,
  icon: ReactElement<LucideIcon>,
  isUsed: boolean
}

export const cardFooter = (
  <div className="flex w-full justify-end items-center">
    <Icons.check className="h-4 w-4 text-accent-foreground mr-1" />
    <span className="text-muted-foreground text-xs">Used on this site</span>
  </div>
);

const iconStyles = "h-8 w-8 p-1 border rounded-full";

export const frontEndTechnologies: techType[] = [
  {
    name: "Next 13",
    icon: <Icons.next className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "React 18",
    icon: <Icons.react className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Redux",
    icon: <Icons.redux className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "Tanstack/React Query",
    icon: <Icons.reactQuery className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Axios",
    icon: <Icons.axios className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Jest",
    icon: <Icons.jest className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "Tailwind CSS",
    icon: <Icons.tailwind className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Framer Motion",
    icon: <Icons.framer className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "React Hook Form",
    icon: <Icons.reactHookForm className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Docker",
    icon: <Icons.docker className={iconStyles} />,
    isUsed: false,
  },
];

export const backEndTechnologies: techType[] = [
  {
    name: "Express",
    icon: <Icons.express className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "Next Auth",
    icon: <Icons.nextAuth className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Zod",
    icon: <Icons.zod className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "Prisma",
    icon: <Icons.prisma className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "SQL",
    icon: <Icons.database className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "MongoDB",
    icon: <Icons.mongo className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "Google Firebase",
    icon: <Icons.firebase className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "PlanetScale",
    icon: <Icons.planetScale className={iconStyles} />,
    isUsed: true,
  },
  {
    name: "AWS",
    icon: <Icons.aws className={iconStyles} />,
    isUsed: false,
  },
  {
    name: "OpenAI",
    icon: <Icons.openAi className={iconStyles} />,
    isUsed: true,
  },
];
