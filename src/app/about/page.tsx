import AboutHeroSection from "@/components/sections/AboutHeroSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import OurPromiseSection from "@/components/sections/OurPromiseSection";
import OurStorySection from "@/components/sections/OurStorySection";

export default function AboutPage() {
    return (
        <main className="pt-16">
            <AboutHeroSection />
            <OurStorySection />
            <OurPromiseSection />
            <CallToActionSection />
            {/* <Footer /> */}
        </main>
    )
}