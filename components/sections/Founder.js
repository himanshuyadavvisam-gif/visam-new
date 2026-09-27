"use client";

import Image from "next/image";
import { brand } from "@/lib/content";
import TiltCard from "@/components/ui/TiltCard";
import RevealText from "@/components/ui/RevealText";

export default function Founder() {
  return (
    <section className="relative overflow-hidden border-t border-paper/10 bg-ink py-28 text-paper md:py-36">
      <div className="mx-auto grid max-w-360 gap-14 px-6 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-16 md:px-10 lg:gap-24 lg:px-16">
        <TiltCard className="relative mx-auto w-full max-w-[320px] md:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl">
            <Image
              src={brand.founder.image}
              alt={brand.founder.name}
              fill
              sizes="(min-width: 768px) 480px, 320px"
              className="object-cover object-top"
              priority
            />
          </div>
        </TiltCard>

        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Founder &amp; CEO
          </span>

          <RevealText
            as="h2"
            lines={[brand.founder.name]}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-paper md:text-6xl"
          />

          <p className="mt-2 text-sm text-paper/50 md:text-base">{brand.founder.title}</p>

          <blockquote className="mt-8 max-w-4xl font-display text-2xl leading-snug text-paper/90 md:text-3xl lg:text-4xl">
            &ldquo;{brand.founder.quote}&rdquo;
          </blockquote>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-paper/60 md:text-lg lg:text-xl">
            {brand.founder.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
