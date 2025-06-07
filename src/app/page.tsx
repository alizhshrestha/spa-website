import HeroSection from "@/components/sections/HeroSection";
import NavBar from "@/components/sections/NavBar";
import ServiceGrid from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ServiceGrid />
    </main>
  );
}
