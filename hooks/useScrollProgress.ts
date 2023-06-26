'use client'

import { useEffect, useState } from "react";


const useScrollProgress= () => {
  //To fix, refreshing the page after scrolling
  const initialY = window.scrollY;
  const initialHeight = document.body.scrollHeight - window.innerHeight;
  const initialState = Number((initialY / initialHeight).toFixed(2)) * 100;

  const [completion, setCompletion] = useState(initialState);

  useEffect(()=>{
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2))*100)
      } else setCompletion(0);
      console.log("currentProgress: ", currentProgress, "ScrollHeight: ", scrollHeight);
    }
    
    window.addEventListener("scroll", updateScrollCompletion);

    return (() => {
      window.removeEventListener("scroll", updateScrollCompletion);
    })

  },[])

  return completion;
};

export default useScrollProgress;
