import Work from "@/components/sections/Work";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: `Work | ${brand.name}`,
  description:
    "Real projects, real results — branding, e-commerce, packaging and marketing work from Visam Solutions.",
};

export default function WorkPage() {
  return (
    <main>
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
