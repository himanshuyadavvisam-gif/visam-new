"use client";

import { whyChoose } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section className="relative bg-ink py-16 text-paper md:py-36">
      <div className="mx-auto max-w-360 px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Why Visam
        </span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
          We don&apos;t just build websites. We build long-term partnerships.
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="border-t border-paper/15 pt-6">
              <h3 className="font-display text-xl font-semibold text-paper md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/60 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
