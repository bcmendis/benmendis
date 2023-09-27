"use client"
import { FC, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { cn } from "@/lib/utils";

const Chat: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(()=>{
    console.log(isOpen);
  },[isOpen])

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e);
    setIsOpen(prev => !prev);
  }
  
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-black z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 lg:w-72 bottom-6 bg-muted border border-b-0 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              onClick={e => onClickHandler(e)}
              className={cn("px-2 lg:px-6 ", `${isOpen ? "border-b-2 border-accent" : "lg:border-b-2 lg:border-accent"}`)}
            >
              <ChatHeader isOpen={isOpen} />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <div className="flex-1">messages</div>
                <ChatInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
