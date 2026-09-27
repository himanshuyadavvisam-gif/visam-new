"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroContent } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";
import Magnetic from "@/components/ui/Magnetic";
import HeroVideoBackground from "./HeroVideoBackground";

const CAPTION_INTERVAL = 2600;

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  const [captionIndex, setCaptionIndex] = useState(0);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setCaptionIndex((i) => (i + 1) % heroContent.visualCaptions.length);
    }, CAPTION_INTERVAL);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 md:items-center md:px-10"
    >
      <HeroVideoBackground />

      <div className="relative z-10 max-w-xl">
        <span className="mb-6 inline-block rounded-full border border-line bg-paper/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-soft backdrop-blur-sm">
          {heroContent.eyebrow}
        </span>

        <RevealText
          as="h1"
          lines={heroContent.lines}
          onLoad
          delay={0.2}
          className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-ink md:text-[4.6vw]"
        />

        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
          {heroContent.sub}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Link
              href={heroContent.cta.href}
              data-cursor="cta"
              data-cursor-label="Talk"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {heroContent.cta.label}
            </Link>
          </Magnetic>
          <Link
            href={heroContent.secondaryCta.href}
            data-cursor="link"
            className="group flex items-center gap-2 text-sm font-medium text-ink"
          >
            {heroContent.secondaryCta.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden md:right-10 md:block">
        <span
          key={captionIndex}
          className="inline-block font-display text-2xl font-medium text-ink md:text-3xl"
          style={{ animation: "hero-caption-in 0.6s ease both" }}
        >
          {heroContent.visualCaptions[captionIndex]}
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-widest text-ink-soft md:left-10 md:flex">
        <span className="h-8 w-px animate-pulse bg-ink-soft/40" />
        Scroll
      </div>

      <style jsx>{`
        @keyframes hero-caption-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
