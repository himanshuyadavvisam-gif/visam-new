"use client";

import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="relative bg-paper py-28 md:py-36">
      <div className="px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Client Love
        </span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
          Don&apos;t just take our word for it.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 px-6 md:mt-20 md:grid-cols-3 md:px-10">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl border border-line bg-paper-dim/50 p-8"
          >
            <blockquote className="font-display text-xl leading-snug text-ink md:text-2xl">
              <span className="text-accent">&ldquo;</span>
              {t.quote}
              <span className="text-accent">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8">
              <div className="font-medium text-ink">{t.name}</div>
              <div className="text-sm text-ink-soft">{t.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
