import { Icons } from "@/components/layout/icons";

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "benmendis",
  description: "My personal website.",
  siteLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Reviews",
      href: "/reviews",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ],
};

export const Links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ben-mendis",
    icon: Icons.linkedIn,
  },
  {
    title: "GitHub",
    href: "https://github.com/bcmendis",
    icon: Icons.gitHub,
  },
];