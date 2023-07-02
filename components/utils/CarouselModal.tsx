"use client";
import { DialogContent } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion as m} from "framer-motion";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

//add sizes to other images
//add priority to image in focus
//move to portfolio page when all bugs are fixed

interface CarouselProps {
  data: StaticImageData[];
  initial?: number
}

const swipeConfidenceThreshold = 10000;

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


  const onRight = () => {
    if (position < data.length -1) setPosition(position => position + 1);
  }
  const onLeft = () => {
    if (position > 0) setPosition(position => position - 1);
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };


  return (
    <DialogContent className="flex justify-center items-center w-screen h-[40vw] bg-none border-none p-0 m-0">
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
                    zIndex: index === position ? 1 : 0,
                    left:
                      aspectRatio > 1
                        ? `${(index - position) * 40 - 20}vw`
                        : `${(index - position) * 70 - 30}vw`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={position === index ? 1 : 0}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, { offset, velocity }) => {
                    e.stopPropagation();
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) onRight();
                    else if (swipe > swipeConfidenceThreshold) onLeft();
                  }}
                  className={`absolute ${
                    aspectRatio > 1
                      ? "w-[40vw] top-[-20vw]"
                      : "top-[-35vw] w-[70vw]"
                  } aspect-square overflow-hidden rounded-xl cursor-grab`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    loading={index===position ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === position ? true : false}
                    className="h-full w-full pointer-events-none object-cover"
                  />
                </m.div>
              );
            })
          : null}
      </div>
      <div className="relative">
        <button
          className="box-border z-[2] m-0 absolute translate-y-[-50%] left-[-50vw] py-10 pr-10 text-accent-foreground"
          onClick={onLeft}
        >
          <ChevronLeft className="h-10 w-10  sm:h-20 sm:w-20" />
        </button>
        <button
          className="box-border z-[2] m-0 absolute translate-y-[-50%] right-[-50vw] py-10 pl-10 text-accent-foreground"
          onClick={onRight}
        >
          <ChevronRight className="h-10 w-10 sm:h-20 sm:w-20" />
        </button>
      </div>
      <div className="relative">
        <DialogClose className="absolute right-[-40vw] top-[-40vh] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </div>
    </DialogContent>
  );
};

export default CarouselModal;
