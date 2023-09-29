"use client";
import { FC, HTMLAttributes, useContext, useRef, useState } from "react";
import { MessagesContext } from "@/context/messages";
import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Icons } from "../layout/icons";
import { cn } from "@/lib/utils";

import TextareaAutosize from "react-textarea-autosize";
import { toast } from "@/hooks/use-toast";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const textAreaRef = useRef<null | HTMLTextAreaElement>(null);
  
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (_message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      if(!response.ok) {
        throw new Error();
      }

      return response.body;
    },
    onMutate(message) {
      addMessage(message);

    },
    onSuccess: async stream => {
      // converting OPENAI stream to text
      if (!stream) {
        throw new Error("No stream found");
      }

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, prev => prev + chunkValue);
      }
      setIsMessageUpdating(false);
      setInput("");

      setTimeout(()=>{
        textAreaRef.current?.focus();
      }, 10)
    },
    onError(error, message) {
      toast({
        title: "Oops! Something went wrong",
        description: "Could not send message. Please try again",
        variant: "destructive",
      });
      removeMessage(message.id);
      textAreaRef.current?.focus();
    }
  });

  return (
    <div
      {...props}
      className={cn("border-t-2 border-accent rounded-md", className)}
    >
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          id="chatInput"
          name="chatInput"
          ref={textAreaRef}
          rows={2}
          maxRows={4}
          autoFocus
          disabled={isLoading}
          // placeholder="Write a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          className="peer disabled:opacity-50 pr-14 resize-none flex w-full border-0 bg-background py-1.5 text-primary focus:ring-0 text-sm sm:leading-6"
        />

        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border bg-muted border-muted px-1 font-sans text-xs text-accent-foreground ">
            {isLoading ? (
              <Icons.loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Icons.cornerDownLeft className="w-3 h-3" />
            )}
          </kbd>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-background peer-focus:border-t-2 peer-focus:border-accent"
        />
      </div>
    </div>
  );
};

export default ChatInput;
