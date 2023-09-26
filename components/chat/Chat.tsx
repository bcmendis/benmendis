import { FC } from "react";
import { Accordion, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ChatHeader from "./ChatHeader";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-black z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 lg:w-72 bottom-8 bg-muted/90 md:bg-muted border border-b-0 rounded-full lg:rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-2 lg:px-6 lg:border-b-2 lg:border-accent">
              <ChatHeader />
            </AccordionTrigger>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
