"use client";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../layout/icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsOpen(prev => !prev);
  }

  return (
    <Accordion type="single" collapsible className="relative z-40 shadow-xl">
      <AccordionItem value="item-1">
        <div
          className={cn(
            "fixed right-6 ml-8 2xl:w-[28rem] bottom-6 bg-muted border border-b-0 border-muted rounded-md ",
            {
              "right-7 ml-7 -mb-6 sm:mb-0": isOpen,
              "xl:w-[15rem]": !isOpen,
            }
          )}
        >
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              onClick={e => onClickHandler(e)}
              className={cn("px-2 xl:px-6 rounded-md", {
                "lg:border-b-2 lg:border-accent": !isOpen,
                "border-b-2 border-accent": isOpen,
              })}
            >
              <ChatHeader isOpen={isOpen} />
              <Icons.chevronDown
                className={cn(
                  "h-4 w-4 text-primary shrink-0 transition-transform duration-200",
                  {
                    "hidden lg:flex": !isOpen,
                    "flex": isOpen,
                  }
                )}
              />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-[18rem] sm:h-80 xl:h-[28rem]">
                <ChatMessages className="px-2 py-3 flex-1" />
                <ChatInput className="px-2 lg:px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
