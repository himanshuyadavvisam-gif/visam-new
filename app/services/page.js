import ServicesShowcase from "@/components/sections/ServicesShowcase";
import WhyChoose from "@/components/sections/WhyChoose";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: `Services | ${brand.name}`,
  description:
    "Brand identity, web development, e-commerce, packaging design, digital marketing and business consulting — Visam Solutions' core services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-16 md:pt-20">
      <ServicesShowcase />
      <WhyChoose />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
