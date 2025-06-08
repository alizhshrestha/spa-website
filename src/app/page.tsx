import AboutHeroSection from "@/components/sections/AboutHeroSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import ServiceGrid from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceGrid isServicePage={false} />
      <section id="about" className="mt-10">
        <AboutHeroSection />
        <OurStorySection />
      </section>
      <ContactSection />
    </main>
  );
}
