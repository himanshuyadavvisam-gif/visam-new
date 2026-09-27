"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";

export default function Work({ limit, showMoreLink = false }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="relative bg-paper py-16 md:py-36">
      <div className="px-6 md:px-10">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Selected Work
        </span>
        <RevealText
          as="h2"
          lines={["Projects that", "carried the idea", "all the way through."]}
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl"
        />
      </div>

      <div className="mt-16 flex flex-col md:mt-24">
        {list.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {showMoreLink && (
        <div className="mt-16 flex justify-center px-6 md:px-10">
          <Link
            href="/work"
            data-cursor="link"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View All Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}

function ProjectRow({ project, index }) {
  const rowRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    const mask = maskRef.current;
    if (!row || !mask) return;

    const ctx = gsap.context(() => {
      gsap.set(mask, { scaleY: 1 });

      gsap.to(mask, {
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    }, row);

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={rowRef}
      href={`/work/${project.id}`}
      data-cursor="project"
      data-cursor-label="View"
      className="group relative flex flex-col gap-6 border-t border-line px-6 py-10 last:border-b md:flex-row md:items-center md:gap-12 md:px-10 md:py-16"
    >
      <span className="font-display text-lg text-ink-soft transition-colors duration-300 group-hover:text-accent md:w-16">
        {project.index}
      </span>

      <div className="relative h-[45vw] w-full overflow-hidden rounded-2xl bg-paper-dim md:h-[38vh] md:w-[46%]">
        <div className="absolute inset-0 p-4 md:p-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-contain"
          />
        </div>
        <div
          ref={maskRef}
          className="absolute inset-0 origin-top bg-paper"
          style={{ transform: "scaleY(1)" }}
        />
      </div>

      <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-ink-soft md:text-base">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start gap-1 text-sm text-ink-soft md:mt-0 md:items-end">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
