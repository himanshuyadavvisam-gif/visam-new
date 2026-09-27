import Contact from "@/components/sections/Contact";
import Footer from "@/components/navigation/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: `Contact | ${brand.name}`,
  description: `Get in touch with ${brand.name} — ${brand.address}.`,
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <Footer />
    </main>
  );
}
