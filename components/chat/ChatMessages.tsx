"use client";
import { FC, HTMLAttributes, useContext } from "react";
import { MessagesContext } from "@/context/messages";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import MarkdownLite from "./MarkdownLite";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);
  const invertedMessages = [...messages].reverse();

  const {theme} = useTheme();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 bg-muted overflow-y-auto scrollbar-thumb-rounded scrollbar-w-2 scrolling-touch",
        {
          "scrollbar-track-bg-light scrollbar-thumb-light": theme === "light",
          "scrollbar-track-bg-dark scrollbar-thumb-dark": theme === "dark",
        },
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {invertedMessages.map(message => (
        <div key={message.id} className="chat-message">
          <div
            className={cn("flex items-end", {
              "justify-end": message.isUserMessage,
            })}
          >
            <div
              className={cn(
                "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                {
                  "order-1 items-end": message.isUserMessage,
                  "order-1 items-start": !message.isUserMessage,
                }
              )}
            >
              <p
                className={cn("px-4 py-2 rounded-lg", {
                  "bg-accent text-foreground": message.isUserMessage,
                  "bg-muted-foreground text-background": !message.isUserMessage,
                })}
              >
                <MarkdownLite text={message.text} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
