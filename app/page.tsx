import Hero from "@/components/home/Hero";
import Review from "@/components/home/Review";
import Skills from "@/components/home/Skills";


export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Skills />
      <Review />
    </div>
  );
}
