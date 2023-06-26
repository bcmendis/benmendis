'use client'

import { useEffect, useState } from "react";


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
    
    /* To update scroll value on component mount
    updates to correct value,
    even after user has scrolled and then reloads the page */
    updateScrollCompletion();
    window.addEventListener("scroll", updateScrollCompletion);

    return (() => {
      window.removeEventListener("scroll", updateScrollCompletion);
    })

  },[])

  return completion;
};

export default useScrollProgress;
