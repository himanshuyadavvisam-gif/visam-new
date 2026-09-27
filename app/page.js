import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services showMoreCard />
      <Work limit={4} showMoreLink />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
