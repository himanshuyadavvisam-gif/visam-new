"use client";

import { useEffect, useRef, useState } from "react";
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
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-paper py-16 md:py-0">
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
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "-42% -30%", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${(px * 0.5 + 0.5) * 100}%`);
    card.style.setProperty("--my", `${(py * 0.5 + 0.5) * 100}%`);
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <Link
      ref={cardRef}
      href={`/services/${service.id}`}
      data-cursor="link"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transformStyle: "preserve-3d",
        backgroundImage:
          "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.08), transparent 60%)",
      }}
      data-active={isActive}
      className={`group relative flex w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-line p-8 transition-[transform,background-color] duration-300 ease-out will-change-transform hover:bg-ink md:h-[70vh] md:w-[34vw] md:p-10 lg:w-[28vw] ${
        isActive ? "bg-ink" : "bg-paper-dim/60"
      }`}
    >
      <div className="flex items-start justify-between" style={{ transform: "translateZ(40px)" }}>
        <span className="font-display text-lg text-ink-soft transition-colors duration-500 group-hover:text-paper/60 group-data-[active=true]:text-paper/60">
          {service.index}
        </span>
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-b from-paper to-paper-dim text-ink-soft shadow-[0_2px_2px_rgba(255,255,255,0.6)_inset,0_-3px_6px_rgba(0,0,0,0.08)_inset,0_10px_16px_-6px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:from-accent group-hover:to-accent-soft group-hover:text-paper group-data-[active=true]:scale-110 group-data-[active=true]:from-accent group-data-[active=true]:to-accent-soft group-data-[active=true]:text-paper">
          <ServiceIcon id={service.id} />
        </span>
      </div>

      <div style={{ transform: "translateZ(24px)" }}>
        <h3 className="font-display text-3xl font-semibold text-ink transition-colors duration-500 group-hover:text-paper group-data-[active=true]:text-paper md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70 group-data-[active=true]:text-paper/70 md:text-base">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft transition-colors duration-500 group-hover:border-paper/25 group-hover:text-paper/70 group-data-[active=true]:border-paper/25 group-data-[active=true]:text-paper/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-500 group-hover:text-paper group-data-[active=true]:text-paper">
          Learn more
          <span className="transition-transform group-hover:translate-x-1 group-data-[active=true]:translate-x-1">→</span>
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
