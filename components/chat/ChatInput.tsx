"use client"
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");
  
  return (
    <div
      {...props}
      className={cn("border-t border-muted-foreground", className)}
    >
      <div className="mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          rows={1}
          maxRows={2}
          autoFocus
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Write a message..."
          className="disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-background py-1.5 text-primary focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
