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
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/ben-mendis",
    gitHub: "https://github.com/bcmendis",
  },
};
