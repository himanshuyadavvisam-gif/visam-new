"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Splits children (array of strings, one per line) into masked lines that
 * reveal via a translateY animation.
 *
 * `onLoad` (used for above-the-fold content like the hero heading) plays
 * immediately on mount instead of via ScrollTrigger — a scroll trigger for
 * content that's already in the viewport at page load doesn't reliably fire.
 */
export default function RevealText({
  lines,
  as: Tag = "div",
  className = "",
  stagger = 0.08,
  start = "top 85%",
  once = true,
  onLoad = false,
  delay = 0,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const lineEls = el.querySelectorAll("[data-reveal-line]");

    const ctx = gsap.context(() => {
      gsap.set(lineEls, { yPercent: 110 });

      if (onLoad) {
        gsap.to(lineEls, {
          yPercent: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger,
          delay,
        });
      } else {
        gsap.to(lineEls, {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [stagger, start, once, onLoad, delay]);

  return (
    <Tag ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <span data-reveal-line className="inline-block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
