"use client";

import { technologies } from "@/lib/content";

export default function TechStack() {
  return (
    <section className="relative bg-paper-dim/50 py-16 md:py-36">
      <div className="mx-auto max-w-360 px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Tooling
        </span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
          The stack behind the work.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-ink/5 md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-ink-soft md:text-base">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
