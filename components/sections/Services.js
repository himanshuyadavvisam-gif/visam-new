"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function Services({ showMoreCard = false }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-paper py-28 md:py-0">
      <div className="px-6 md:hidden">
        <SectionHeading />
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-10 px-6 md:h-screen md:flex-row md:items-center md:gap-6 md:px-0 lg:gap-8"
      >
        <div className="hidden shrink-0 md:flex md:h-full md:w-[38vw] md:items-center md:pl-16">
          <SectionHeading />
        </div>

        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        {showMoreCard ? (
          <MoreCard />
        ) : (
          <div className="hidden shrink-0 md:block md:w-[10vw]" />
        )}
      </div>
    </section>
  );
}

function SectionHeading() {
  return (
    <div className="max-w-md">
      <span className="text-xs font-medium uppercase tracking-widest text-accent">
        What We Do
      </span>
      <RevealText
        as="h2"
        lines={["Services built", "for the whole", "digital surface."]}
        className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink md:text-5xl"
      />
      <p className="mt-6 hidden text-ink-soft md:block">
        Scroll to move through the studio&apos;s core disciplines — each one
        designed to connect to the next.
      </p>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.id}`}
      data-cursor="link"
      className="group relative flex w-full shrink-0 flex-col justify-between rounded-3xl border border-line bg-paper-dim/60 p-8 transition-colors duration-500 hover:bg-ink md:h-[70vh] md:w-[34vw] md:p-10 lg:w-[28vw]"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-lg text-ink-soft transition-colors duration-500 group-hover:text-paper/60">
          {service.index}
        </span>
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-500 group-hover:scale-110 group-hover:border-paper/30 group-hover:text-paper/70">
          <ServiceIcon id={service.id} />
        </span>
      </div>

      <div>
        <h3 className="font-display text-3xl font-semibold text-ink transition-colors duration-500 group-hover:text-paper md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70 md:text-base">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft transition-colors duration-500 group-hover:border-paper/25 group-hover:text-paper/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-500 group-hover:text-paper">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

function MoreCard() {
  return (
    <Link
      href="/services"
      data-cursor="link"
      className="group flex w-full shrink-0 flex-col items-start justify-center gap-4 rounded-3xl border border-line bg-ink p-8 text-paper transition-colors duration-500 hover:bg-accent md:h-[70vh] md:w-[22vw] md:p-10"
    >
      <span className="font-display text-2xl font-semibold md:text-3xl">
        Explore all services
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        View full list
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
