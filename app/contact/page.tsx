
import CarouselModal from "@/components/utils/CarouselModal";
import React from "react";

import { stableDiffusionImages } from "@/lib/images";

const Contact = () => {
  return (
    <div>
      <CarouselModal data={stableDiffusionImages} initial={3}/>
    </div>
  );
};

export default Contact;
