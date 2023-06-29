"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion as m} from "framer-motion";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useCallback } from "react";

//try to fix spacing on reorientation for mobile devices
//move to portfolio page when all bugs are fixed

interface CarouselProps {
  data: StaticImageData[];
  initial?: number
}

const CarouselModal = ({data, initial}:CarouselProps) => {
  
  const [position, setPosition] = useState(initial || 0);
  const [aspectRatio, setAspectRatio] = useState(0);

  
  useEffect(()=>{
    const handleResize = () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  console.log(aspectRatio);


  const onRight = () => {
    if (position < data.length -1) setPosition(position => position + 1);
  }
  const onLeft = () => {
    if (position > 0) setPosition(position => position - 1);
  };


  return (
    <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="flex justify-center items-center w-screen h-none max-w-none bg-none border-none p-0 m-0">
      <div className="relative">
        {data
          ? data.map((image, index) => {
              return (
                <m.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{
                    opacity: index === position ? 1 : 0.2,
                    scale: index === position ? 1 : 0.8,
                    left:
                      aspectRatio > 1
                        ? `${(index - position) * 40 - 20}vw`
                        : `${(index - position) * 70 - 35}vw`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className={`absolute top-[-35vw] w-[70vw] sm:w-[40vw] sm:top-[-20vw] aspect-square overflow-hidden rounded-xl`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="h-full w-full aspect-square"
                  />
                </m.div>
              );
            })
          : null}
        <button className="absolute top-[50%] left-[-45vw]" onClick={onLeft}>
          Prev
        </button>
        <button className="absolute top-[50%] right-[-45vw]" onClick={onRight}>
          Next
        </button>
      </div>
      <div className="relative">
            <DialogClose className="absolute right-[-45vw] top-[-40vh] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default CarouselModal;
