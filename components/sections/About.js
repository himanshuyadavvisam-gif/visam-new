"use client";

import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-16 text-paper md:py-40">
      <div className="relative px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {about.eyebrow}
        </span>

        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
          {about.heading}
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-paper/15 pt-8 md:border-none md:pt-0">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-paper md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-paper/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-paper/15 pt-10 sm:grid-cols-3">
          {about.team.map((member) => (
            <div key={member.name}>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                {member.role}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-paper">
                {member.name}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/60">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
