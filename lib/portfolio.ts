import { StaticImageData } from "next/image";
import bookstore from "../public/assets/portfolio/bookStore.png";
import blog from "../public/assets/portfolio/blog.png";
import jokeGpt from "../public/assets/portfolio/jokeGpt.png";
import login from "../public/assets/portfolio/login.png";

interface webAppsType {
  title: string,
  link: string,
  image: StaticImageData,
  description: string,
  featured: string,
}

export const webApps: webAppsType[] = [
  {
    title: "Book Store",
    link: "https://book-store-bcmendis.vercel.app/",
    image: bookstore,
    description: "Online bookstore allowing users to add, delete & edit books",
    featured: "Redux",
  },
  {
    title: "Blog",
    link: "https://blog-query-bcmendis.vercel.app/",
    image: blog,
    description: "Listing blog posts from an API with pagination",
    featured: "React Query",
  },
  {
    title: "JokeGPT",
    link: "https://joke-gpt-bcmendis.vercel.app/",
    image: jokeGpt,
    description:
      "Acquires AI generated joke from OpenAI API from user provided prompt",
    featured: "OpenAI",
  },
  {
    title: "Login Screen",
    link: "https://login-page-next13-bcmendis.vercel.app/",
    image: login,
    description:
      "Login form with instant user input feedback",
    featured: "React Hook Form",
  },
];

