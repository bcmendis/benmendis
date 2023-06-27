"use client"

import { cn } from "@/lib/utils";
import { fontCode } from "@/lib/fonts";
import { TypeAnimation } from "react-type-animation";

interface TypewriterProps {
  data: (string | number)[];
}


//add Rubix font to this component

const Typewriter = ({data}:TypewriterProps) => {
  return (
    <TypeAnimation
      sequence={data}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
