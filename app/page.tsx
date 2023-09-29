import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Review from "@/components/home/Review";


export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Skills />
      <Review />
    </div>
  );
}
