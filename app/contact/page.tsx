import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CarouselModal from "@/components/utils/CarouselModal";

import { stableDiffusionImages } from "@/lib/images";

const Contact = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <CarouselModal data={stableDiffusionImages} initial={3} />
      </Dialog>
    </div>
  );
};

export default Contact;
