import { FC } from "react";
import { Icons } from "../layout/icons";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  isOpen: boolean
}

const ChatHeader: FC<ChatHeaderProps> = ({isOpen}) => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-primary">
      <div
        className={cn(
          "flex-col items-start text-sm",
          `${isOpen ? "flex" : "hidden lg:flex"} `
        )}
      >
        <p className="text-xs">Chat with </p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium">B-3N</p>
        </div>
      </div>
      {!isOpen && (
        <div className="flex lg:hidden aspect-square">
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-green-400" />
          <Icons.messageCircle className="h-8 w-8 text-accent-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
