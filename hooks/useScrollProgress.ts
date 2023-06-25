'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useScrollProgress= () => {
  const [completion, setCompletion] = useState(0);

  useEffect(()=>{
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2))*100)
      } else setCompletion(0);
    }

    window.addEventListener("scroll", updateScrollCompletion);

    return (() => {
      window.removeEventListener("scroll", updateScrollCompletion);
    })

  },[])

  return completion;
};

export default useScrollProgress;
