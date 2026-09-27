"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { process } from "@/lib/content";

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-paper py-16 md:py-36">
      <div className="mx-auto max-w-360 px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.3fr_0.7fr] md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              How We Work
            </span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl">
              A process built for clarity, not ceremony.
            </h2>

            <div className="relative mt-16">
              <div className="absolute left-[27px] top-0 h-full w-px bg-line md:left-[35px]" />
              <div
                ref={lineRef}
                className="absolute left-[27px] top-0 h-full w-px origin-top bg-accent md:left-[35px]"
              />

              <div className="flex flex-col gap-14 md:gap-20">
                {process.map((step) => (
                  <div key={step.index} className="relative flex gap-8 pl-16 md:gap-16 md:pl-20">
                    <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-paper font-display text-sm text-ink md:h-[70px] md:w-[70px]">
                      {step.index}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-ink-soft md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:sticky md:top-32 md:h-fit">
            <div className="rounded-3xl border border-line bg-paper-dim/50 p-8 md:p-10">
              <div className="font-display text-5xl font-semibold text-ink md:text-6xl">
                8–12
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-ink-soft">
                Weeks — Average Project Timeline
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft md:text-base">
                From discovery to launch, most projects ship within 8 to 12
                weeks — with a clear check-in at every stage along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
