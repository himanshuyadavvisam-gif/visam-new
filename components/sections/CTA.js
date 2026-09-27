"use client";

import Link from "next/link";
import { cta } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";
import Magnetic from "@/components/ui/Magnetic";

export default function CTA() {
  return (
    <section className="relative bg-paper px-6 py-20 md:px-10 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Start a Project
        </span>

        <RevealText
          as="h2"
          lines={cta.heading.split(". ").map((s, i, arr) => (i < arr.length - 1 ? s + "." : s))}
          className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink md:text-7xl"
        />

        <p className="mx-auto mt-6 max-w-md text-ink-soft md:text-lg">{cta.sub}</p>

        <div className="mt-10 flex justify-center">
          <Magnetic strength={0.5}>
            <Link
              href={cta.action.href}
              data-cursor="cta"
              data-cursor-label="Go"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-10 py-5 text-base font-medium text-paper transition-colors hover:bg-accent md:text-lg"
            >
              {cta.action.label}
              <span>→</span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
