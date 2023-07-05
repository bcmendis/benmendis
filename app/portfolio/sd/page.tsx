"use client"

import Image, { StaticImageData } from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CarouselModal from "@/components/utils/CarouselModal";

import { stableDiffusionImages } from "@/lib/images";


//fix React saving the state of scrolled carousel elements

const StableDiffusionPage = () => {
  const images: StaticImageData[] = stableDiffusionImages;

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {images &&
          images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <Image
                  src={image}
                  alt=""
                  className="w-[250px] aspect-square object-cover rounded-xl sm:hover:scale-105 ease-in-out"
                />
              </DialogTrigger>
              <CarouselModal data={images} initial={index} />
            </Dialog>
          ))}
      </div>
    </section>
  );
};

export default StableDiffusionPage;
