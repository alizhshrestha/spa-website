import AboutHeroSection from "@/components/sections/AboutHeroSection";
import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import ServiceGrid from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceGrid />
      <section id="about" className="mt-10">
        <AboutHeroSection />
        <OurStorySection />
      </section>
    </main>
  );
}
