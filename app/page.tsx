import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Review from "@/components/home/Review";


export default function Home() {
  //origin test
  return (
    <div className="space-y-10">
      <Hero />
      <Skills />
      <Review />
    </div>
  );
}

// Supabase migration production deployment test