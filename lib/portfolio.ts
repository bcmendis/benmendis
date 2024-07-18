import { StaticImageData } from "next/image";

import longworthDental from "@/public/assets/portfolio/workProjects/longworthDental.png";

import bookstore from "@/public/assets/portfolio/hobbyProjects/bookStore.png";
import blog from "@/public/assets/portfolio/hobbyProjects/blog.png";
import jokeGpt from "@/public/assets/portfolio/hobbyProjects/jokeGpt.png";
import login from "@/public/assets/portfolio/hobbyProjects/login.png";
import autoStonx from "@/public/assets/portfolio/hobbyProjects/autoStonx.png";

export type webAppsType = {
  title: string;
  link: string;
  image: StaticImageData;
  description: string;
  featuredTech: string;
  isFeatured?: boolean;
};

export const workProjects: webAppsType[] = [
  {
    title: "Longworth Dental",
    link: "https://longworthdental.ca/",
    image: longworthDental,
    description:
      "Family oriented dental clinic with branches in Bowmanville and Courtice, Canada",
    featuredTech: "Custom Search",
    isFeatured: true,
  },
];

export const hobbyProjects: webAppsType[] = [
  {
    title: "Auto Stonx",
    link: "https://auto-stonx-bcmendis-projects.vercel.app/",
    image: autoStonx,
    description: "Automated Stock Trading Platform with Drag & Drop Functionality",
    featuredTech: "React Flow",
    isFeatured: true,
  },
  {
    title: "Book Store",
    link: "https://book-store-bcmendis.vercel.app/",
    image: bookstore,
    description: "Online bookstore allowing users to add, delete & edit books",
    featuredTech: "Redux",
  },
  {
    title: "Blog",
    link: "https://blog-query-bcmendis.vercel.app/",
    image: blog,
    description: "Listing blog posts from an API with pagination",
    featuredTech: "React Query",
  },
  {
    title: "JokeGPT",
    link: "https://joke-gpt-bcmendis.vercel.app/",
    image: jokeGpt,
    description:
      "Acquires AI generated joke from OpenAI API from user provided prompt",
    featuredTech: "OpenAI",
  },
  {
    title: "Login Screen",
    link: "https://login-page-next13-bcmendis.vercel.app/",
    image: login,
    description: "Login form with instant user input feedback",
    featuredTech: "React Hook Form",
  },
];
