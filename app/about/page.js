import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: `About | ${brand.name}`,
  description:
    "Jodhpur's digital studio — the story, process, and team behind Visam Solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Founder />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
