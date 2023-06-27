"use client"

import { TypeAnimation } from "react-type-animation";

interface TypewriterProps {
  data: (string | number)[];
}


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
