
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "../Typewriter";


const typingData = [
        "Mechanical",
        300,
        "Software",
        300,
        "Fullstack",
        1000,
        "Mechatronics Engineer.",
        3000,
      ];


const Hero = () => {
  return (
    <Card className="flex p-4 items-center">
      <CardContent className="flex flex-col-reverse sm:flex-row w-full h-full justify-center items-center p-6">
        <div className="flex flex-col h-full justify-center items-center sm:justify-between sm:items-start w-full sm:w-1/2 gap-2 mt-4 sm:m-0">
          <div className="flex flex-col gap-2 sm:mb-2">
            <span className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-end">
              <h1 className="text-accent-foreground text-4xl sm:text-5xl">
                Hi!
              </h1>
              <h2 className="sm:ml-6 text-4xl font-semibold text-muted-foreground">{`I'm Ben`}</h2>
            </span>
          </div>
          <span className="text-xl sm:text-3xl text-muted-foreground text-center sm:text-left">
            {`A `}
            <Typewriter data={typingData} />
          </span>
          <div className="mt-6 w-full sm:w-auto flex flex-col gap-3 text-center sm:text-left">
            <p className="text-lg text-accent-foreground">
              Welcome to my professional website
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/portfolio">Portfolio</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex-1 aspect-square min-w-[150px] max-w-[250px]">
          <Image
            src="/assets/home/profile-dark2.png"
            alt="Profile Photo Dark"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            className="hidden dark:block rounded-full border-4 border-accent"
          />
          <Image
            src="/assets/home/profile-light.png"
            alt="Profile Photo Light"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            className="block dark:hidden rounded-full border-4 border-accent"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Hero;
