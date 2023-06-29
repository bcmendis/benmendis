"use client";

import { stableDiffusionImages } from "@/lib/images";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";


const Carousel = () => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const aspectRatio = windowHeight / windowWidth;

  const data = stableDiffusionImages;
  const [position, setPosition] = useState(0);

  const onRight = () => {
    if (position < data.length -1) setPosition(position => position + 1);
  }
  const onLeft = () => {
    if (position > 0) setPosition(position => position - 1);
  };

  console.log(aspectRatio);

  return (
    <>
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
                      aspectRatio < 1.5
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
    </>
  );
};

export default Carousel;
