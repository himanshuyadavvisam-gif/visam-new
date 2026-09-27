"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    document.documentElement.classList.add("custom-cursor");

    const dot = dotRef.current;
    const label = labelRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };

    const quick = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3.out" });
    const quickY = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      quick(target.x);
      quickY(target.y);
    };

    const setState = (variant, text) => {
      dot.dataset.variant = variant;
      if (label) label.textContent = text || "";
    };

    const onOver = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (!el) {
        setState("default");
        return;
      }
      setState(el.dataset.cursor, el.dataset.cursorLabel);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      data-variant="default"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full mix-blend-difference md:flex
        h-3 w-3 bg-white transition-[width,height] duration-300 ease-out
        data-[variant=link]:h-14 data-[variant=link]:w-14
        data-[variant=project]:h-20 data-[variant=project]:w-20
        data-[variant=cta]:h-16 data-[variant=cta]:w-16"
    >
      <span
        ref={labelRef}
        className="text-[10px] font-medium uppercase tracking-wider text-ink"
      />
    </div>
  );
}
