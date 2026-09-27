import Link from "next/link";
import Footer from "@/components/navigation/Footer";
import RevealText from "@/components/ui/RevealText";
import { brand } from "@/lib/content";

export const metadata = {
  title: `Page not found | ${brand.name}`,
};

export default function NotFound() {
  return (
    <main>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-6 pt-24 text-center">
        <span className="font-display text-[22vw] font-semibold leading-none text-ink/[0.05] md:text-[14vw]">
          404
        </span>

        <div className="relative -mt-10 md:-mt-16">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Lost in the digital surface
          </span>

          <RevealText
            as="h1"
            onLoad
            lines={["This page", "doesn't exist."]}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl"
          />

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            It may have been moved, renamed, or never existed. Let&apos;s get
            you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              data-cursor="cta"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Back to Home
            </Link>
            <Link
              href="/work"
              data-cursor="link"
              className="group flex items-center gap-2 text-sm font-medium text-ink"
            >
              View Our Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
