"use client"
import { FC, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { cn } from "@/lib/utils";
import ChatMessages from "./ChatMessages";

const Chat: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsOpen(prev => !prev);
  }
  
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-black z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 ml-8 lg:w-72 bottom-6 bg-muted border border-b-0 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              onClick={e => onClickHandler(e)}
              className={cn("px-2 lg:px-6 ", `${isOpen ? "border-b-2 border-accent" : "lg:border-b-2 lg:border-accent"}`)}
            >
              <ChatHeader isOpen={isOpen} />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <ChatMessages className="px-2 py-3 flex-1"/>
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
