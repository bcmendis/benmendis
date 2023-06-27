"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="flex-col flex-1 py-6">
      <Card className="flex p-4 items-center">
        <CardContent className="flex w-full h-full justify-center items-center p-6">
          <div className="flex flex-col h-full justify-between items-start w-1/2  gap-4">
            <div className="flex flex-col gap-2 mb-6">
              <span className="flex justify-start items-end">
                <h1 className="text-accent-foreground text-5xl">Hi!</h1>
                <h2 className="ml-6 text-4xl font-semibold text-muted-foreground">{`I'm Ben`}</h2>
              </span>
              <span className="text-3xl text-muted-foreground">
                {`A `}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Mechanical",
                    300, // wait 1s before replacing "Mice" with "Hamsters"
                    "Software",
                    300,
                    "Fullstack",
                    1000,
                    "Mechatronics Engineer.",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </div>
            <div className="flex flex-col gap-3 text-lg">
              <p className="text-xl text-accent-foreground">
                Welcome to my professional website
              </p>
            </div>
            <div className="flex gap-3 mt-1 text-xl">
              <Button variant="secondary" className="">
                Portfolio
              </Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
          <div className="relative flex-1 aspect-square min-w-[50px] max-w-[250px]">
            <Image
              src="/assets/home/profile-dark2.png"
              alt="Profile Photo"
              fill
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              className="hidden dark:block rounded-full border-4 border-accent"
            />
            <Image
              src="/assets/home/profile-light.png"
              alt="Profile Photo"
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
    </div>
  );
}
