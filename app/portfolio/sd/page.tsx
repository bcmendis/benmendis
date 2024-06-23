"use client";

import Image, { StaticImageData } from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CarouselModal from "@/components/utils/CarouselModal";

import { stableDiffusionImages } from "@/lib/images";

//fix React saving the state of scrolled carousel elements

const StableDiffusionPage = () => {
  const images: StaticImageData[] = stableDiffusionImages;

  return (
    <section className="flex flex-col w-full h-full justify-center items-center gap-y-6">
      <p className="text-muted-foreground">
        A gallery of images created using <strong> AUTOMATIC1111 </strong> and{" "}
        <strong> Stable Diffusion model &quot;v2&quot; </strong>
        within a beautifully animated
        <strong> custom image carousel</strong> using Framer Motion.
      </p>
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
