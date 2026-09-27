"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TiltCard from "@/components/ui/TiltCard";

export default function ServicesShowcase() {
  return (
    <section className="relative bg-paper py-16 md:py-36">
      <div className="mx-auto max-w-360 px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              What We Do
            </span>
            <RevealText
              as="h1"
              onLoad
              lines={["Six disciplines.", "One connected studio."]}
              className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl lg:text-7xl"
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              From first sketch to shipped product — every service below
              connects to the next, so nothing gets handed off and lost in
              translation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-line pt-8 md:grid-cols-1 md:divide-y md:divide-line md:border-t-0 md:pt-0">
            {[
              { value: "06", label: "Core Disciplines" },
              { value: "500+", label: "Projects Delivered" },
              { value: "7+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="md:py-6 md:first:pt-0">
                <div className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-ink-soft md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, reverse }) {
  return (
    <div className="grid gap-10 border-t border-line py-14 last:border-b md:grid-cols-2 md:items-center md:gap-16 md:py-20">
      <div className={reverse ? "md:order-2" : ""}>
        <TiltCard className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-110 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-line bg-paper-dim/50">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-contain p-4"
              />
            ) : (
              <ServiceIcon id={service.id} className="h-20 w-20 text-ink-soft md:h-28 md:w-28" />
            )}
          </div>
        </TiltCard>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <span className="font-display text-lg text-ink-soft">{service.index}</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-5xl">
          {service.title}
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/services/${service.id}`}
          data-cursor="link"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent md:text-base"
        >
          View service details
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
