import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Carousel from "@/components/utils/Carousel";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="flex justify-center items-center w-screen h-screen max-w-none border-4 p-0 m-0 overflow-hidden">
          <Carousel />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
