import ContactCard from "@/components/contact/ContactCard";

const Contact = async () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="flex flex-col items-center gap-5 text-center text-muted-foreground">
        <h2>Contact Me</h2>
        <p className="text-base sm:text-xl">
          Fill out the form and I will get back to you as soon as possible.
        </p>
      </div>
      <ContactCard />
    </div>
  );
};

export default Contact;
